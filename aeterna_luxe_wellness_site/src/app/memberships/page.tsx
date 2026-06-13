import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Buttons";
import { CheckoutButton } from "@/components/CheckoutButton";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { memberships } from "@/data/memberships";
import { meta } from "@/lib/seo";
export const metadata = meta({title:"Memberships", description:"Aeterna memberships in Hollywood, Florida for monthly spa rituals, priority booking, consult-first wellness support, and private South Florida care plans.", path:"/memberships"});
export default function MembershipsPage(){return <><PageHero eyebrow="Memberships" title="Make restoration part of your monthly rhythm." copy="Monthly rituals and consultation-first wellness support designed for recurring care and an elevated client relationship. Medical wellness benefits require eligibility review; results vary."/><section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
  <div className="grid gap-6 lg:grid-cols-[1fr_.85fr] lg:items-stretch">
    <div className="rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">Membership Comparison</p>
      <h2 className="mt-3 font-display text-5xl leading-tight text-espresso">Choose a monthly ritual with clear value.</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-cocoa/70">Fixed memberships can reserve the first month through Stripe Checkout when configured. Medical wellness credits, injections, IV therapy, and advanced services remain consult-first and eligibility-based.</p>
    </div>
    <MedicalDisclaimer compact />
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{memberships.map(m=><div key={m.slug} className={`rounded-5xl border p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxury md:p-7 ${m.popular?"border-sage bg-gradient-to-b from-sage to-olive text-cream":"border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/70 text-espresso"}`}><p className="text-xs uppercase tracking-luxury opacity-70">{m.popular?"Most Popular":"Aeterna"}</p><h2 className="mt-3 font-display text-4xl leading-tight">{m.title}</h2><p className="mt-3 text-3xl font-semibold">{m.price}</p><p className="mt-2 text-sm font-semibold uppercase tracking-[.14em] opacity-70">{m.bestFor}</p><p className="mt-4 text-sm leading-7 opacity-75">{m.summary}</p><div className="mt-5 rounded-3xl border border-current/10 bg-current/5 p-4 shadow-inset"><p className="text-xs uppercase tracking-[.14em] opacity-70">Value Breakdown</p><p className="mt-2 text-sm leading-6 opacity-80">{m.value}</p></div><ul className="mt-6 grid gap-3 border-t border-current/10 pt-6 text-sm">{m.features.map(f=><li key={f}>• {f}</li>)}</ul>{m.monthlyAmount ? <CheckoutButton amount={m.monthlyAmount * 100} name={`${m.title} Membership`} itemType="membership" itemSlug={m.slug} label="Start Membership" cancelPath="/memberships" className={m.popular?"mt-8 border-cream/20 bg-cream text-espresso hover:bg-vanilla":"mt-8"} /> : <Button href="/consultation" variant={m.popular?"outline":"primary"} className={m.popular?"mt-8 border-cream/20 bg-cream text-espresso shadow-lift hover:bg-vanilla":"mt-8"}>Plan Consultation</Button>}</div>)}</div>

  <div className="mt-14 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
    <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Membership Notes</p>
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {["Priority booking and routine care planning","Wellness benefits reviewed for eligibility","Custom concierge planning available for Elite"].map(item => <p key={item} className="rounded-4xl border border-cream/10 bg-cream/5 p-5 text-sm leading-7 text-cream/70 shadow-inset">{item}</p>)}
    </div>
  </div>
</div></section></>}
