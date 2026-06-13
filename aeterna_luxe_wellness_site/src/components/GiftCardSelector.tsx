"use client";

import { useMemo, useState } from "react";
import { CheckoutButton } from "@/components/CheckoutButton";

const occasions = [
  { title:"Birthday Ritual", amount:150, copy:"A polished gift for a facial, massage, or serene spa day." },
  { title:"Couples Experience", amount:300, copy:"A generous start toward a shared sanctuary appointment." },
  { title:"Mother's Day Ritual", amount:250, copy:"A warm gift for renewal, glow, and quiet time." },
  { title:"Custom Amount", amount:100, copy:"Choose a custom starting amount for a personal note." }
] as const;

type Occasion = typeof occasions[number];

export function GiftCardSelector() {
  const [selected,setSelected] = useState<Occasion>(occasions[0]);
  const [customAmount,setCustomAmount] = useState(100);
  const amount = selected.title === "Custom Amount" ? customAmount : selected.amount;
  const checkoutName = useMemo(()=>`Aeterna Gift Card - ${selected.title}`, [selected.title]);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {occasions.map(occasion => {
          const active = selected.title === occasion.title;
          return <button key={occasion.title} type="button" onClick={()=>setSelected(occasion)} aria-pressed={active} className={`rounded-4xl border p-5 text-left shadow-inset outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-sage/30 ${active ? "border-sage bg-sage/10" : "border-cocoa/10 bg-cream/85 hover:border-sage/40 hover:bg-vanilla"}`}>
            <span className="block text-xs uppercase tracking-luxury text-sage">{occasion.title}</span>
            <span className="mt-2 block font-display text-3xl text-espresso">{occasion.title === "Custom Amount" ? "$100+" : `$${occasion.amount}`}</span>
            <span className="mt-3 block text-sm leading-6 text-cocoa/70">{occasion.copy}</span>
          </button>;
        })}
      </div>
      {selected.title === "Custom Amount" && <label className="mt-5 block">
        <span className="text-xs uppercase tracking-luxury text-sage">Custom Amount</span>
        <input type="number" min={100} step={25} value={customAmount} onChange={event=>setCustomAmount(Number(event.target.value))} className="mt-2 w-full rounded-3xl border border-cocoa/10 bg-cream/90 px-5 py-4 text-espresso shadow-inset outline-none transition focus:border-sage focus:bg-cream focus-visible:ring-2 focus-visible:ring-sage/30" />
      </label>}
      <div className="mt-8 rounded-4xl border border-champagne/30 bg-cream/80 p-5 shadow-inset">
        <p className="text-xs uppercase tracking-luxury text-sage">Selected Gift</p>
        <p className="mt-2 font-display text-4xl text-espresso">{selected.title}</p>
        <p className="mt-2 text-sm leading-7 text-cocoa/70">${amount} gift card. Stripe Checkout will open when payment is configured.</p>
        <CheckoutButton amount={amount * 100} name={checkoutName} itemType="gift_card" itemSlug="aeterna-gift-card" label="Checkout Gift Card" className="mt-5" successPath="/book/success" cancelPath="/gift-cards" />
      </div>
    </div>
  );
}
