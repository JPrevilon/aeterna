import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/Card";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { products } from "@/data/products";
import { meta } from "@/lib/seo";
export const metadata = meta({title:"Shop", description:"Shop Aeterna gift cards and preview consultation-required wellness shots, IV therapy, GLP-1 programs, hormone support, and longevity care in Hollywood, Florida.", path:"/shop"});

const categoryOrder = ["Giftable Wellness","Consultation Deposits","Wellness Shots","GLP-1 Programs","IV Therapy","Hormone Balance","Anti-Aging / Longevity"];

export default function ShopPage(){
  const grouped = categoryOrder.map(category => ({ category, items:products.filter(product => product.category === category) })).filter(group => group.items.length);
  return <><PageHero eyebrow="Shop" title="Wellness products, shots, IV support, and giftable rituals." copy="Explore giftable care and provider-guided wellness options. Shots, IV therapy, GLP-1 programs, and hormone support require consultation when clinically appropriate. Results vary."/><section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
    <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
      <div className="rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
        <p className="text-xs uppercase tracking-luxury text-sage">Shop the Aeterna Edit</p>
        <h2 className="mt-3 font-display text-5xl leading-tight text-espresso">Gift cards can checkout now. Medical wellness begins with consultation.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-cocoa/70">Use the shop to preview wellness shots, IV support, GLP-1 programs, hormone wellness, and longevity-support options. Consultation-required items route to intake instead of direct purchase.</p>
        <div className="mt-6 flex flex-wrap gap-2">{grouped.map(group => <a key={group.category} href={`#${group.category.toLowerCase().replaceAll(" ","-").replaceAll("/","")}`} className="rounded-full border border-cocoa/10 bg-cream/85 px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] text-espresso shadow-inset outline-none transition hover:border-sage/40 hover:bg-vanilla focus-visible:ring-2 focus-visible:ring-sage/40">{group.category}</a>)}</div>
      </div>
      <MedicalDisclaimer compact />
    </div>

    <div className="mt-16 grid gap-16">
      {grouped.map(group => <section key={group.category} id={group.category.toLowerCase().replaceAll(" ","-").replaceAll("/","")} className="scroll-mt-32">
        <div className="mb-8 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Aeterna Shop</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">{group.category}</h2>
          <p className="mt-3 max-w-2xl text-cocoa/70">{group.category === "Giftable Wellness" ? "Gift cards are Stripe-ready and may be used toward eligible services." : group.category === "Consultation Deposits" ? "Deposits can reserve a consultation path, but do not purchase treatment, prescriptions, injections, or guaranteed outcomes." : "Preview options, then begin with provider-guided consultation when clinically appropriate. Results vary."}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{group.items.map(product => <ProductCard key={product.slug} product={product}/>)}</div>
      </section>)}
    </div>

    <div className="mt-16 rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
      <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Checkout or Consultation</p>
      <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Send a gift, or start a provider-guided wellness path.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-cream/70">Gift cards route to Stripe Checkout. Wellness shots, IV therapy, GLP-1 programs, hormone support, and longevity-support options require consultation and are not sold directly.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/gift-cards" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/20 bg-cream px-7 py-3 text-xs font-semibold uppercase tracking-[.18em] text-espresso shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:bg-vanilla focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso">Gift Cards</Link>
          <Link href="/consultation" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/10 px-7 py-3 text-xs font-semibold uppercase tracking-[.18em] text-cream outline-none transition duration-500 hover:-translate-y-0.5 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso">Consultation</Link>
        </div>
      </div>
    </div>
  </div></section></>
}
