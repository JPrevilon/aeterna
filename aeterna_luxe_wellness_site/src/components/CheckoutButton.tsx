"use client";

import { CreditCard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type CheckoutButtonProps = {
  amount?: number;
  name?: string;
  itemType?: "gift_card" | "product" | "membership" | "deposit";
  itemSlug?: string;
  purchaseType?: "gift_card" | "membership" | "other";
  customerName?: string;
  customerEmail?: string;
  label?: string;
  className?: string;
  successPath?: string;
  cancelPath?: string;
};

function legacyItemType(purchaseType: CheckoutButtonProps["purchaseType"]) {
  if (purchaseType === "gift_card") return "gift_card";
  if (purchaseType === "membership") return "membership";
  return undefined;
}

export function CheckoutButton({ amount, name, itemType, itemSlug, purchaseType = "other", customerName, customerEmail, label = "Checkout", className = "", successPath = "/book/success", cancelPath = "/gift-cards" }: CheckoutButtonProps) {
  const [status,setStatus] = useState<"idle"|"loading"|"error">("idle");
  const [message,setMessage] = useState("");

  async function checkout() {
    setStatus("loading");
    setMessage("");
    const res = await fetch("/api/checkout", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ amount, name, itemType:itemType || legacyItemType(purchaseType), itemSlug, purchaseType, customerName, customerEmail, successPath, cancelPath })
    });
    const data = await res.json().catch(()=>({}));
    if (res.ok && data.url) {
      window.location.href = data.url;
      return;
    }
    setStatus("error");
    setMessage(data.error || "Checkout is not configured yet. Please contact Aeterna.");
  }

  return (
    <div>
      <button
        type="button"
        onClick={checkout}
        disabled={status === "loading" || (amount !== undefined && amount < 100)}
        className={cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-7 py-3 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60", className)}
      >
        <CreditCard className="h-4 w-4" aria-hidden />
        {status === "loading" ? "Opening Checkout..." : label}
      </button>
      {message && <p className="mt-3 text-sm leading-6 text-cocoa/65">{message}</p>}
    </div>
  );
}
