import { Banknote, CalendarClock, CreditCard, Landmark } from "lucide-react";
import { Button } from "@/components/Buttons";

const methods = [
  { icon: Banknote, title: "Cash", copy: "Accepted in person" },
  { icon: CreditCard, title: "Credit Cards", copy: "Major cards accepted" },
  { icon: CalendarClock, title: "In-House Financing", copy: "Ask about available plans" },
  { icon: Landmark, title: "Alphaeon Credit", copy: "Subject to credit approval" }
];

export function PaymentOptions() {
  return (
    <section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-champagne/35 bg-cream p-7 shadow-luxury md:p-10">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Flexible ways to pay</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">Care that fits your plan.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-cocoa/65">We accept cash and major credit cards. Financing options may also be available for qualified applicants.</p>
            <Button href="/contact" variant="outline" className="mt-7">Ask About Financing</Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {methods.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex items-center gap-4 rounded-4xl border border-espresso/10 bg-vanilla/55 p-4 shadow-inset">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso text-champagne"><Icon className="h-5 w-5" aria-hidden /></span>
                <div><p className="font-semibold text-espresso">{title}</p><p className="mt-1 text-xs text-cocoa/55">{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-7 border-t border-champagne/25 pt-5 text-xs leading-6 text-cocoa/50">Financing is subject to application, approval, provider terms, and availability. Contact Aeterna for current options and details.</p>
      </div>
    </section>
  );
}
