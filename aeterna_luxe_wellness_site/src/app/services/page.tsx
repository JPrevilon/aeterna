import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Card";
import { Button } from "@/components/Buttons";
import { categories, byCategory, services } from "@/data/services";
import { meta } from "@/lib/seo";

export const metadata = meta({ title:"Services", description:"Explore Aeterna medical weight loss, wellness shots, IV therapy, hormone balance, testosterone and men's health, body sculpting, skin tightening, pelvic floor wellness, and anti-aging care in Hollywood, Florida.", path:"/services" });

type ServicesPageProps = {
  searchParams?: Promise<{ category?: string | string[] }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = await searchParams;
  const categorySlug = Array.isArray(params?.category) ? params?.category[0] : params?.category;
  const selected = categories.find(c => c.slug === categorySlug);
  const visibleCategories = selected ? [selected] : categories;
  const visibleCount = visibleCategories.reduce((total, category) => total + byCategory(category.title).length, 0);

  return <>
    <PageHero eyebrow="Services" title="A complete wellness menu, organized with luxury clarity." copy="Medical weight loss, wellness shots, IV therapy, hormone balance, body sculpting, skin tightening, pelvic floor wellness, and anti-aging care — consultation-first and provider-guided when clinically appropriate."/>
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-5 shadow-soft md:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-luxury text-sage">Browse the Menu</p>
              <h2 className="mt-2 font-display text-4xl leading-tight text-espresso md:text-5xl">{selected ? selected.title : "All Aeterna Services"}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-cocoa/70">{selected ? selected.summary : `${visibleCount} services across medical weight loss, IV therapy, wellness shots, hormone wellness, body sculpting, and anti-aging care.`}</p>
            </div>
            <p className="rounded-full border border-champagne/30 bg-cream/80 px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-cocoa/70 shadow-inset">{visibleCount} Services</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link href="/services" aria-current={!selected ? "page" : undefined} className={`rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[.15em] outline-none transition focus-visible:ring-2 focus-visible:ring-sage/40 ${!selected ? "border-espresso bg-espresso text-cream shadow-lift" : "border-cocoa/10 bg-cream/80 text-espresso shadow-inset hover:border-sage/40 hover:bg-vanilla"}`}>All</Link>
            {categories.map(c => <Link key={c.slug} href={`/services?category=${c.slug}#${c.slug}`} aria-current={selected?.slug === c.slug ? "page" : undefined} className={`rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[.15em] outline-none transition focus-visible:ring-2 focus-visible:ring-sage/40 ${selected?.slug === c.slug ? "border-espresso bg-espresso text-cream shadow-lift" : "border-cocoa/10 bg-cream/80 text-espresso shadow-inset hover:border-sage/40 hover:bg-vanilla"}`}>{c.title}</Link>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-champagne/25 pt-5">
            {categories.map(c => <a key={c.slug} href={selected ? `/services#${c.slug}` : `#${c.slug}`} className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[.14em] text-sage outline-none transition hover:bg-cream hover:text-espresso focus-visible:ring-2 focus-visible:ring-sage/40">{c.title}</a>)}
          </div>
        </div>

        <div className="mt-14 grid gap-16">
          {visibleCategories.map(c=><div key={c.slug} id={c.slug} className="scroll-mt-32"><div className="mb-8 border-b border-champagne/30 pb-6"><p className="text-xs uppercase tracking-luxury text-sage">Aeterna Menu</p><h2 className="mt-2 font-display text-5xl leading-tight text-espresso">{c.title}</h2><p className="mt-3 max-w-2xl text-cocoa/70">{c.summary}</p></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{byCategory(c.title).map(s=><ServiceCard key={s.slug} service={s}/>)}</div></div>)}
        </div>

        <div className="mt-16 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Ready When You Are</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Choose your ritual, or begin with a private consultation.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-cream/70">Spa services can be requested directly. Medical wellness, injections, IV therapy, hormone care, body sculpting, and GLP-1 support remain consultation-first and provider-guided when clinically appropriate. Results vary.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/book" variant="outline" className="border-cream/20 bg-cream text-espresso focus-visible:ring-offset-espresso">Request Booking</Button>
              <Button href="/consultation" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10 focus-visible:ring-offset-espresso">Start Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
