import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard, ProductCard } from "@/components/Card";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Button } from "@/components/Buttons";
import { SplineSlot } from "@/components/SplineSlot";
import { ClinicalTrust } from "@/components/ClinicalTrust";
import { PaymentOptions } from "@/components/PaymentOptions";
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
    <ClinicalTrust />
    <SplineSlot />
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl text-center"><p className="text-xs font-semibold uppercase tracking-luxury text-sage">The Aeterna Philosophy</p><h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-7xl">Wellness treated as a ritual, beauty treated as a long-term relationship.</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-cocoa/75">Aeterna brings spa relaxation, medical wellness, anti-aging care, energy support, and body refinement into one serene Hollywood, Florida destination for South Florida clients seeking calm, consult-first care.</p></div>
    </Reveal>
    <section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="What can we help you with?" title="Choose your Aeterna path." copy="Select the treatment area that best matches your goals. Each pathway is simple to explore and begins with the right level of clinical guidance."/><RevealStagger className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">{categories.slice(0,6).map((c,index)=><RevealItem key={c.slug}><Link href={`/services#${c.slug}`} className={`group grid min-h-40 grid-cols-[1fr_8.5rem] overflow-hidden rounded-4xl border border-cocoa/10 shadow-soft outline-none transition duration-500 hover:-translate-y-1 hover:border-emerald/35 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-emerald/35 focus-visible:ring-offset-4 focus-visible:ring-offset-vanilla sm:grid-cols-[1fr_11rem] ${["bg-[#F7E8D1]","bg-[#E7F0E6]","bg-[#E8F1F4]","bg-[#F3E6E1]","bg-[#EEE8DF]","bg-[#F4EDD9]"][index]}`}><div className="flex flex-col justify-center p-5 md:p-7"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-emerald">Aeterna care</p><h3 className="mt-2 font-display text-3xl leading-tight text-espresso md:text-4xl">{c.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-emerald">View treatments <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden /></span></div><div className="relative min-h-full overflow-hidden"><Image src={c.image} alt={`${c.title} treatment illustration`} fill sizes="(min-width: 640px) 176px, 136px" className="object-cover transition duration-700 group-hover:scale-105"/></div></Link></RevealItem>)}</RevealStagger><div className="mt-10 text-center"><Button href="/services" variant="outline">View All Treatment Paths</Button></div></section>
    <section className="bg-cream px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Signature Rituals" title="High-touch services with a calm luxury finish."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">{featured.slice(0,6).map(s=><RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}</RevealStagger><div className="mt-12 text-center"><Button href="/services" variant="outline">View Full Menu</Button></div></section>
    <PhotoGrid/><ConsultationCTA/>
    <section className="bg-cream px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Shop + Wellness" title="Pair treatments with wellness support." copy="Preview giftable rituals, wellness shots, IV support, and consultation-based programs designed to complement your care plan."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">{featuredProducts.slice(0,4).map(p=><RevealItem key={p.slug}><ProductCard product={p}/></RevealItem>)}</RevealStagger></section>
    <section className="linen bg-vanilla px-6 py-16 md:px-8 lg:py-24"><SectionHeader eyebrow="Memberships" title="Recurring wellness, elevated." copy="Choose a monthly rhythm for spa rituals, priority booking, and consult-first wellness support."/><RevealStagger className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">{memberships.map(m=><RevealItem key={m.slug}><div className={`rounded-5xl border p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxury ${m.popular?"border-sage bg-gradient-to-b from-sage to-olive text-cream":"border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/70 text-espresso"}`}><p className="text-xs uppercase tracking-luxury opacity-70">{m.popular?"Most Popular":"Aeterna"}</p><h3 className="mt-3 font-display text-4xl">{m.title}</h3><p className="mt-2 text-2xl font-semibold">{m.price}</p><p className="mt-4 text-sm leading-7 opacity-75">{m.summary}</p><ul className="mt-6 grid gap-3 text-sm">{m.features.map(f=><li key={f}>• {f}</li>)}</ul></div></RevealItem>)}</RevealStagger></section>
    <PaymentOptions />
  </>
}
