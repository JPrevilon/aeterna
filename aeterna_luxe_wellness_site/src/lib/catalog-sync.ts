import { memberships } from "@/data/memberships";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { supabaseAdmin } from "@/lib/supabase";

export async function syncCatalogToSupabase() {
  const supabase = supabaseAdmin();
  if(!supabase) return { ok:false, error:"Supabase is not configured" };

  const serviceRows = services.map(service => ({
    slug:service.slug,
    title:service.title,
    category:service.category,
    summary:service.summary,
    description:service.description,
    durations:service.durations,
    price_label:service.priceLabel,
    starting_price:service.startingPrice || null,
    consult_required:Boolean(service.consultRequired),
    featured:Boolean(service.featured),
    image:service.image,
    active:true
  }));

  const productRows = products.map(product => ({
    slug:product.slug,
    title:product.title,
    category:product.category,
    summary:product.summary,
    price_label:product.priceLabel,
    unit_amount:product.checkoutAmount || (product.price ? product.price * 100 : null),
    consult_required:Boolean(product.consultRequired),
    consultation_deposit:Boolean(product.consultationDeposit),
    featured:Boolean(product.featured),
    image:product.image,
    details:product.details,
    benefits:product.benefits || [],
    pairings:product.pairings || [],
    stripe_price_id:product.stripePriceId || null,
    active:true
  }));

  const membershipRows = memberships.map(membership => ({
    slug:membership.slug,
    title:membership.title,
    price_label:membership.price,
    monthly_amount:membership.monthlyAmount || null,
    summary:membership.summary,
    best_for:membership.bestFor || null,
    value_label:membership.value || null,
    features:membership.features,
    popular:Boolean(membership.popular),
    stripe_price_id:membership.stripePriceId || null,
    active:true
  }));

  const serviceResult = await supabase.from("services").upsert(serviceRows, { onConflict:"slug" });
  if(serviceResult.error) return { ok:false, error:serviceResult.error.message };

  const productResult = await supabase.from("products").upsert(productRows, { onConflict:"slug" });
  if(productResult.error) return { ok:false, error:productResult.error.message };

  const membershipResult = await supabase.from("memberships").upsert(membershipRows, { onConflict:"slug" });
  if(membershipResult.error) return { ok:false, error:membershipResult.error.message };

  return { ok:true, counts:{ services:serviceRows.length, products:productRows.length, memberships:membershipRows.length } };
}
