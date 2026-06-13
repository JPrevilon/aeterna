import { NextResponse } from "next/server";
import Stripe from "stripe";
import { memberships, membershipBySlug } from "@/data/memberships";
import { productBySlug } from "@/data/products";
import { serviceBySlug } from "@/data/services";
import { supabaseAdmin } from "@/lib/supabase";
import { checkoutSchema } from "@/lib/validators";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

type CheckoutItemType = "gift_card" | "product" | "membership" | "deposit";
type CheckoutMode = "payment" | "subscription";

type ResolvedCheckout = {
  amount: number;
  itemSlug: string;
  itemType: CheckoutItemType;
  lineItem: Stripe.Checkout.SessionCreateParams.LineItem;
  mode: CheckoutMode;
  title: string;
};

function siteBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
}

function successUrl(path = "/book/success") {
  const separator = path.includes("?") ? "&" : "?";
  return `${siteBaseUrl()}${path}${separator}session_id={CHECKOUT_SESSION_ID}`;
}

function cancelUrl(path:string) {
  return `${siteBaseUrl()}${path}`;
}

function itemTypeFromLegacy(purchaseType: "gift_card" | "membership" | "other" | undefined): CheckoutItemType | undefined {
  if(purchaseType === "gift_card") return "gift_card";
  if(purchaseType === "membership") return "membership";
  return undefined;
}

function priceEnvKey(prefix:string, slug:string) {
  return `STRIPE_PRICE_${prefix}_${slug.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}`;
}

function configuredPriceId(prefix:string, slug:string, explicit?:string) {
  return explicit || process.env[priceEnvKey(prefix, slug)];
}

function amountFromProduct(product:{ checkoutAmount?:number; price?:number }) {
  return product.checkoutAmount || (product.price ? product.price * 100 : null);
}

function priceDataLineItem(title:string, amount:number, recurring = false): Stripe.Checkout.SessionCreateParams.LineItem {
  return {
    quantity:1,
    price_data:{
      currency:"usd",
      unit_amount:amount,
      product_data:{ name:title },
      ...(recurring ? { recurring:{ interval:"month" as const } } : {})
    }
  };
}

async function priceLineItem(stripe:Stripe, priceId:string, fallbackAmount?:number) {
  const price = await stripe.prices.retrieve(priceId);
  const amount = price.unit_amount || fallbackAmount || null;
  if(!amount) throw new Error("Stripe price amount is unavailable");
  return { price, amount, lineItem:{ price:priceId, quantity:1 } satisfies Stripe.Checkout.SessionCreateParams.LineItem };
}

type ServiceDepositResult =
  | { amount:number; itemSlug:string; title:string }
  | { error:string; status:number };

function serviceDepositAmount(slug:string): ServiceDepositResult | null {
  const service = serviceBySlug(slug);
  if(!service) return null;
  if(service.consultRequired) {
    return {
      error:"Consultation-required services cannot be purchased directly. Use the consultation deposit or request consultation.",
      status:403
    };
  }
  if(!service.startingPrice) return { error:"This service does not have a deposit amount configured", status:400 };
  const amount = Math.max(5000, Math.round(service.startingPrice * 100 * 0.25));
  return {
    amount,
    title:`${service.title} Appointment Deposit`,
    itemSlug:service.slug
  };
}

async function resolveCheckout(stripe:Stripe, parsed:ReturnType<typeof checkoutSchema.parse>): Promise<ResolvedCheckout | { error:string; status:number }> {
  const itemType = parsed.itemType || itemTypeFromLegacy(parsed.purchaseType);

  if(itemType === "gift_card") {
    const itemSlug = parsed.itemSlug || "aeterna-gift-card";
    const giftCard = productBySlug(itemSlug);
    if(!giftCard || giftCard.slug !== "aeterna-gift-card") return { error:"Gift card item is not available", status:404 };
    if(!parsed.amount) return { error:"Gift card amount is required", status:400 };
    return {
      amount:parsed.amount,
      itemSlug:giftCard.slug,
      itemType:"gift_card",
      lineItem:priceDataLineItem(giftCard.title, parsed.amount),
      mode:"payment",
      title:parsed.name || giftCard.title
    };
  }

  if(itemType === "membership") {
    if(!parsed.itemSlug) return { error:"Membership slug is required", status:400 };
    const membership = membershipBySlug(parsed.itemSlug);
    if(!membership) return { error:"Membership is not available", status:404 };
    if(!membership.monthlyAmount) return { error:"This membership requires consultation", status:403 };
    const fallbackAmount = membership.monthlyAmount * 100;
    const priceId = configuredPriceId("MEMBERSHIP", membership.slug, membership.stripePriceId);
    if(priceId) {
      const { price, amount, lineItem } = await priceLineItem(stripe, priceId, fallbackAmount);
      return {
        amount,
        itemSlug:membership.slug,
        itemType:"membership",
        lineItem,
        mode:price.recurring ? "subscription" : "payment",
        title:membership.title
      };
    }
    return {
      amount:fallbackAmount,
      itemSlug:membership.slug,
      itemType:"membership",
      lineItem:priceDataLineItem(`${membership.title} Membership`, fallbackAmount, true),
      mode:"subscription",
      title:membership.title
    };
  }

  if(itemType === "product" || itemType === "deposit") {
    if(!parsed.itemSlug) return { error:"Item slug is required", status:400 };
    const product = productBySlug(parsed.itemSlug);

    if(product) {
      if(product.consultRequired && !product.consultationDeposit) {
        return { error:"This item requires consultation and cannot be purchased directly", status:403 };
      }
      if(itemType === "deposit" && !product.consultationDeposit) {
        return { error:"This product is not configured as a deposit", status:400 };
      }
      const fallbackAmount = amountFromProduct(product);
      if(!fallbackAmount) return { error:"This item does not have a checkout amount configured", status:400 };
      const priceId = configuredPriceId("PRODUCT", product.slug, product.stripePriceId);
      if(priceId) {
        const { price, amount, lineItem } = await priceLineItem(stripe, priceId, fallbackAmount);
        if(price.recurring) return { error:"Approved products and deposits must use one-time Stripe prices", status:400 };
        return {
          amount,
          itemSlug:product.slug,
          itemType:product.consultationDeposit ? "deposit" : "product",
          lineItem,
          mode:"payment",
          title:product.title
        };
      }
      return {
        amount:fallbackAmount,
        itemSlug:product.slug,
        itemType:product.consultationDeposit ? "deposit" : "product",
        lineItem:priceDataLineItem(product.title, fallbackAmount),
        mode:"payment",
        title:product.title
      };
    }

    if(itemType === "deposit") {
      const serviceDeposit = serviceDepositAmount(parsed.itemSlug);
      if(!serviceDeposit) return { error:"Deposit item is not available", status:404 };
      if("error" in serviceDeposit) return serviceDeposit;
      const priceId = configuredPriceId("DEPOSIT", serviceDeposit.itemSlug);
      if(priceId) {
        const { price, amount, lineItem } = await priceLineItem(stripe, priceId, serviceDeposit.amount);
        if(price.recurring) return { error:"Deposit prices must be one-time Stripe prices", status:400 };
        return { ...serviceDeposit, amount, itemType:"deposit", lineItem, mode:"payment" };
      }
      return {
        ...serviceDeposit,
        itemType:"deposit",
        lineItem:priceDataLineItem(serviceDeposit.title, serviceDeposit.amount),
        mode:"payment"
      };
    }
  }

  return { error:"Unsupported checkout item", status:400 };
}

export async function POST(request:Request) {
  const limited = rateLimit(request, { keyPrefix:"checkout", limit:20, windowMs:10 * 60 * 1000 });
  if(limited.limited) return rateLimitResponse(limited.retryAfter);

  const body = await request.json().catch(()=>({}));
  const parsed = checkoutSchema.safeParse({ ...body, amount:body.amount === undefined ? undefined : Number(body.amount) });
  if(!parsed.success) return NextResponse.json({error:"Invalid checkout data"},{status:400});
  if(!process.env.STRIPE_SECRET_KEY) return NextResponse.json({error:"Stripe not configured"},{status:501});

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let resolved:ResolvedCheckout | { error:string; status:number };

  try {
    resolved = await resolveCheckout(stripe, parsed.data);
  } catch {
    return NextResponse.json({error:"Stripe price could not be verified"},{status:502});
  }

  if("error" in resolved) return NextResponse.json({error:resolved.error},{status:resolved.status});

  const metadata:Record<string,string> = {
    itemSlug:resolved.itemSlug,
    itemType:resolved.itemType
  };
  if(parsed.data.customerName) metadata.customerName = parsed.data.customerName;

  const defaultCancelPath =
    resolved.itemType === "gift_card" ? "/gift-cards" :
    resolved.itemType === "membership" ? "/memberships" :
    resolved.itemType === "product" ? `/shop/${resolved.itemSlug}` : "/consultation";

  let session:Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.create({
      mode:resolved.mode,
      line_items:[resolved.lineItem],
      metadata,
      customer_email:parsed.data.customerEmail,
      success_url:successUrl(parsed.data.successPath),
      cancel_url:cancelUrl(parsed.data.cancelPath || defaultCancelPath)
    });
  } catch {
    return NextResponse.json({error:"Checkout could not be created. Check Stripe configuration."},{status:502});
  }

  const supabase = supabaseAdmin();
  if(supabase && resolved.itemType === "gift_card") {
    try {
      await supabase.from("gift_card_purchases").insert({
        amount:resolved.amount,
        buyer_name:parsed.data.customerName || null,
        buyer_email:parsed.data.customerEmail || null,
        message:resolved.title,
        stripe_checkout_session_id:session.id,
        status:"pending"
      });
    } catch {}
  }

  return NextResponse.json({url:session.url});
}
