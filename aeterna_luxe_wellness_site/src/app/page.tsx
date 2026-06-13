import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard, ProductCard } from "@/components/Card";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Button } from "@/components/Buttons";
import { SplineSlot } from "@/components/SplineSlot";
import { categories, featured } from "@/data/services";
import { featuredProducts } from "@/data/products";
import { memberships } from "@/data/memberships";
import { meta } from "@/lib/seo";

export const metadata = meta({
  description:"Aeterna Luxe Wellness & Beauty in Hollywood, Florida offers luxury spa rituals and consultation-first medical wellness for South Florida clients seeking beauty, balance, and longevity."
});

export default function HomePage() {
  return <>
    <HomeHero />
    <SplineSlot />
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl text-center"><p className="text-xs font-semibold uppercase tracking-luxury text-sage">The Aeterna Philosophy</p><h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-7xl">Wellness treated as a ritual, beauty treated as a long-term relationship.</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-cocoa/75">Aeterna brings spa relaxation, medical wellness, anti-aging care, energy support, and body refinement into one serene Hollywood, Florida destination for South Florida clients seeking calm, consult-first care.</p></div>
    </Reveal>
    <section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Explore" title="Choose your Aeterna path." copy="Begin with the experience that fits today: spa relaxation, skin care, consultation-first medical wellness, body refinement, or longevity support."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{categories.slice(0,6).map(c=><RevealItem key={c.slug}><Link href={`/services#${c.slug}`} className="group block rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/70 p-6 shadow-soft outline-none transition duration-500 hover:-translate-y-2 hover:border-champagne/40 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-vanilla"><p className="text-xs uppercase tracking-luxury text-sage">Aeterna</p><h3 className="mt-3 font-display text-4xl text-espresso">{c.title}</h3><p className="mt-4 text-sm leading-7 text-cocoa/70">{c.summary}</p><div className="gold-line mt-8 transition duration-500 group-hover:opacity-100"/></Link></RevealItem>)}</RevealStagger></section>
    <section className="bg-cream px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Signature Rituals" title="High-touch services with a calm luxury finish."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">{featured.slice(0,6).map(s=><RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}</RevealStagger><div className="mt-12 text-center"><Button href="/services" variant="outline">View Full Menu</Button></div></section>
    <PhotoGrid/><ConsultationCTA/>
    <section className="bg-cream px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Shop + Wellness" title="Pair treatments with wellness support." copy="Preview giftable rituals, wellness shots, IV support, and consultation-based programs designed to complement your care plan."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">{featuredProducts.slice(0,4).map(p=><RevealItem key={p.slug}><ProductCard product={p}/></RevealItem>)}</RevealStagger></section>
    <section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Memberships" title="Recurring wellness, elevated." copy="Choose a monthly rhythm for spa rituals, priority booking, and consult-first wellness support."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">{memberships.map(m=><RevealItem key={m.slug}><div className={`rounded-5xl border p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxury ${m.popular?"border-sage bg-gradient-to-b from-sage to-olive text-cream":"border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/70 text-espresso"}`}><p className="text-xs uppercase tracking-luxury opacity-70">{m.popular?"Most Popular":"Aeterna"}</p><h3 className="mt-3 font-display text-4xl">{m.title}</h3><p className="mt-2 text-2xl font-semibold">{m.price}</p><p className="mt-4 text-sm leading-7 opacity-75">{m.summary}</p><ul className="mt-6 grid gap-3 text-sm">{m.features.map(f=><li key={f}>• {f}</li>)}</ul></div></RevealItem>)}</RevealStagger></section>
  </>
}
