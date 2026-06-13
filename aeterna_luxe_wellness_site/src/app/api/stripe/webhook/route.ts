import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase";
import type { Json } from "@/lib/supabase-types";

export async function POST(request:Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if(!secret || !webhookSecret) return NextResponse.json({error:"Stripe webhook is not configured"},{status:501});

  const signature = request.headers.get("stripe-signature");
  if(!signature) return NextResponse.json({error:"Missing Stripe signature"},{status:400});

  const stripe = new Stripe(secret);
  const payload = await request.text();
  let event:Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({error:"Invalid Stripe webhook signature"},{status:400});
  }

  const supabase = supabaseAdmin();
  if(supabase) {
    await supabase.from("checkout_events").upsert({
      stripe_event_id:event.id,
      type:event.type,
      payload:event as unknown as Json
    }, { onConflict:"stripe_event_id" });
  }

  if(event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    if(supabase && session.metadata?.itemType === "gift_card") {
      await supabase.from("gift_card_purchases").update({ status:"completed" }).eq("stripe_checkout_session_id", session.id);
    }
  }

  return NextResponse.json({received:true});
}
