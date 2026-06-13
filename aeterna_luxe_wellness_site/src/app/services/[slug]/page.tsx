import Image from "next/image";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/data/services";
import { Button } from "@/components/Buttons";
import { ServiceCard } from "@/components/Card";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { meta, serviceMeta } from "@/lib/seo";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }
export async function generateMetadata({params}:ServicePageProps){ const { slug } = await params; const s = serviceBySlug(slug); return s ? serviceMeta(s) : meta({title:"Service"}); }

export default async function ServiceDetailPage({params}:ServicePageProps) {
  const { slug } = await params;
  const s = serviceBySlug(slug); if(!s) notFound();
  const sameCategory = services.filter(item => item.category === s.category && item.slug !== s.slug);
  const related = [
    ...sameCategory,
    ...services.filter(item => item.featured && item.category !== s.category && item.slug !== s.slug)
  ].slice(0,3);
  const enhancements = s.addOns?.length ? s.addOns : ["Consult with Aeterna for thoughtful pairings"];
  const primaryCta = s.cta || (s.consultRequired ? "Book Consultation" : "Book Now");

  return <>
    <section className="grid bg-espressoGlow text-cream lg:grid-cols-2">
      <div className="relative min-h-[420px] overflow-hidden lg:min-h-[680px]">
        <Image src={s.image} alt={s.title} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-cream/10"/>
      </div>
      <div className="relative flex items-center overflow-hidden px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="floating-logo absolute -right-10 top-10 h-52 w-52 opacity-[.06]"/>
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">{s.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl xl:text-8xl">{s.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/75">{s.description}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cream/15 bg-cream/5 px-4 py-2 shadow-inset">{s.durations.join(" · ")}</span>
            <span className="rounded-full border border-cream/15 bg-cream/5 px-4 py-2 shadow-inset">{s.priceLabel}</span>
            {s.consultRequired && <span className="rounded-full border border-champagne/50 bg-champagne/10 px-4 py-2 text-champagne shadow-inset">Consultation Required</span>}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/book?service=${s.slug}`} variant="outline" className="border-cream/20 bg-cream text-espresso">{primaryCta}</Button>
            <Button href="/consultation" variant="ghost" className="text-cream hover:bg-cream/10">Start Consultation</Button>
          </div>
        </div>
      </div>
    </section>
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-7">
            <p className="text-xs uppercase tracking-luxury text-sage">At a Glance</p>
            <div className="mt-5 grid gap-4 border-t border-champagne/25 pt-5">
              <div><p className="text-xs uppercase tracking-[.16em] text-cocoa/50">Duration</p><p className="mt-1 font-display text-3xl text-espresso">{s.durations.join(" · ")}</p></div>
              <div><p className="text-xs uppercase tracking-[.16em] text-cocoa/50">Pricing</p><p className="mt-1 font-display text-3xl text-espresso">{s.priceLabel}</p></div>
              <div><p className="text-xs uppercase tracking-[.16em] text-cocoa/50">Category</p><p className="mt-1 text-sm font-semibold uppercase tracking-[.16em] text-sage">{s.category}</p></div>
            </div>
          </div>
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-7">
            <p className="text-xs uppercase tracking-luxury text-sage">Best For</p>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-champagne/25 pt-5">{s.bestFor.map(item => <span key={item} className="rounded-full border border-cocoa/10 bg-cream/85 px-4 py-2 text-sm text-cocoa/75 shadow-inset">{item}</span>)}</div>
            <p className="mt-6 text-sm leading-7 text-cocoa/70">Aeterna will personalize pacing, add-ons, and post-care suggestions around your comfort, goals, and appointment type.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-7">
            <p className="text-xs uppercase tracking-luxury text-sage">Benefits</p>
            <ul className="mt-5 grid gap-3 border-t border-champagne/25 pt-5 text-cocoa/75">{s.benefits.map(item => <li key={item}>• {item}</li>)}</ul>
          </div>
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-7">
            <p className="text-xs uppercase tracking-luxury text-sage">Add-Ons & Pairings</p>
            <ul className="mt-5 grid gap-3 border-t border-champagne/25 pt-5 text-cocoa/75">{enhancements.map(item => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
        {(s.note || s.consultRequired) && <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {s.note && <p className="rounded-4xl border border-champagne/30 bg-gradient-to-b from-cream to-vanilla/80 p-6 text-sm leading-7 text-cocoa/70 shadow-inset">{s.note}</p>}
          {s.consultRequired && <MedicalDisclaimer compact />}
        </div>}
        {related.length > 0 && <div className="mt-16">
          <div className="mb-8 border-b border-champagne/30 pb-6">
            <p className="text-xs uppercase tracking-luxury text-sage">Related Services</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Continue the Aeterna path.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{related.map(item => <ServiceCard key={item.slug} service={item}/>)}</div>
        </div>}
        <div className="mt-16 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Next Step</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">{s.consultRequired ? "Begin with a provider-guided consultation." : "Request your preferred appointment time."}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-cream/70">{s.consultRequired ? "This service is consultation-first. Aeterna will review intake, eligibility, and provider-guided next steps when clinically appropriate. Results vary." : "Share your preferred timing and Aeterna will confirm availability, enhancements, and any personalized details before your visit."}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={`/book?service=${s.slug}`} variant="outline" className="border-cream/20 bg-cream text-espresso focus-visible:ring-offset-espresso">{primaryCta}</Button>
              <Button href="/consultation" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10 focus-visible:ring-offset-espresso">Consultation Flow</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="h-24 md:hidden" aria-hidden="true" />
    <StickyMobileCTA
      href={s.consultRequired ? "/consultation" : `/book?service=${s.slug}`}
      label={primaryCta}
      subtext={s.consultRequired ? "Consultation Required · Results Vary" : undefined}
    />
  </>
}
