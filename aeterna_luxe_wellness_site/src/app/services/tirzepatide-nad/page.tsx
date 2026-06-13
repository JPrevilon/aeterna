import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Card";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { Button } from "@/components/Buttons";
import { Accordion } from "@/components/Accordion";
import { byCategory, serviceBySlug } from "@/data/services";
import { meta } from "@/lib/seo";
import { ServiceQuickStats } from "@/components/ServiceQuickStats";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata = meta({
  title: "Tirzepatide + NAD+ Program",
  description: "A premium combined protocol for weight loss and longevity support. Tirzepatide and NAD+ together, provider-guided when clinically appropriate. Results vary.",
  path: "/services/tirzepatide-nad"
});

const benefits = [
  { title: "Dual Pathway Weight Loss", body: "Tirzepatide targets both GLP-1 and GIP receptors, supporting appetite regulation and metabolic wellness." },
  { title: "NAD+ Longevity Support", body: "NAD+ is included to support cellular energy, recovery, and metabolic function alongside your weight-loss protocol." },
  { title: "Energy & Metabolism", body: "Designed for clients who want to address weight and energy together through one structured program." },
  { title: "Provider-Guided Monthly Program", body: "Monthly check-ins, clinical monitoring, and protocol adjustments throughout your program." }
];

const bestFor = ["Combined wellness programs", "Longevity-focused clients", "Energy and metabolic support", "Advanced weight-loss programs"];

const faqs = [
  { q: "What makes this program different from Tirzepatide alone?", a: "The Tirzepatide + NAD+ program pairs medically guided weight-loss support with NAD+ longevity support — addressing both body composition and cellular energy in one protocol. It is designed for clients who want a more comprehensive wellness approach." },
  { q: "What is NAD+?", a: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme involved in cellular energy production and repair. NAD+ support is included as an injectable option based on provider protocol and individual eligibility." },
  { q: "How is this program monitored?", a: "All programs are provider-guided with regular check-ins and protocol reviews. Labs may be required depending on your health history and individual program design." },
  { q: "Who is this program best suited for?", a: "This program is designed for clients who want to address weight management and longevity together. Provider evaluation determines eligibility and the appropriate protocol for each individual." }
];

export default function TirzepatideNadPage() {
  const mainService = serviceBySlug("tirzepatide-nad-program");
  const supportingServices = [
    serviceBySlug("tirzepatide-weight-loss-program"),
    serviceBySlug("medical-weight-loss-consultation"),
    serviceBySlug("energy-support-nad-iv")
  ].filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];

  return <>
    <PageHero
      eyebrow="Tirzepatide + NAD+"
      title="Weight loss and longevity, guided together."
      copy="A premium combined protocol pairing Tirzepatide weight-loss support with NAD+ longevity support — designed for clients focused on body composition, energy, and metabolic wellness. Consultation required. Results vary."
      image="/assets/photos/aeterna-storefront-door.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Protocol", value: "Tirzepatide + NAD+", highlight: true },
      { label: "Program", value: "Monthly" },
      { label: "Consult", value: "Required" },
      { label: "From", value: "$499/mo" }
    ]} />

    {/* Hero highlight */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">The Protocol</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">Two powerful supports. One structured program.</h2>
            <p className="mt-6 text-base leading-8 text-cocoa/70">Tirzepatide targets GLP-1 and GIP receptors to support appetite regulation and metabolic wellness. NAD+ supports cellular energy and recovery. Together, they form a comprehensive monthly program designed for clients ready to invest in both weight and longevity.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation">Book Consultation</Button>
              <Button href="/services/medical-weight-loss" variant="outline">View Weight Loss Programs</Button>
            </div>
          </div>
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
            <p className="text-xs uppercase tracking-luxury text-sage">At a Glance</p>
            <div className="mt-5 grid gap-5 border-t border-champagne/25 pt-5">
              {[
                ["Program Type", "Monthly Combined Protocol"],
                ["Starting Price", "From $499/month"],
                ["Consultation", "Required before enrollment"],
                ["Monitoring", "Provider check-ins included"]
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[.16em] text-cocoa/50">{label}</p>
                  <p className="mt-1 font-display text-2xl text-espresso">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>

    {/* Benefits */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Program Benefits</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">What this program supports.</h2>
        <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2">
          {benefits.map(b => (
            <RevealItem key={b.title}>
              <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
                <p className="font-display text-2xl text-espresso">{b.title}</p>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{b.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-6">
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-luxury text-sage">Best For</p>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-champagne/25 pt-4">
              {bestFor.map(tag => (
                <span key={tag} className="rounded-full border border-cocoa/10 bg-cream/85 px-4 py-2 text-sm text-cocoa/75 shadow-inset">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Main service card + related */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Book This Program</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Begin with a consultation.</h2>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mainService && <RevealItem><ServiceCard service={mainService}/></RevealItem>}
          {supportingServices.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
        </RevealStagger>
      </div>
    </Reveal>

    {/* FAQ */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Questions & Answers</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Frequently asked.</h2>
        <div className="mt-8"><Accordion items={faqs}/></div>
      </div>
    </section>

    {/* Disclaimer + CTA */}
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <MedicalDisclaimer/>
        <div className="mt-10 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Get Started</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Begin with a private consultation.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your provider will review your eligibility, goals, and program design. Prescription options require clinical evaluation and are not appropriate for all clients.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Consultation</Button>
            <Button href="/services/medical-weight-loss" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">All Weight Loss Programs</Button>
          </div>
        </div>
      </div>
    </section>
    <div className="h-24 md:hidden" aria-hidden="true" />
    <StickyMobileCTA href="/consultation" label="Book Consultation" subtext="Consultation Required" />
  </>;
}
