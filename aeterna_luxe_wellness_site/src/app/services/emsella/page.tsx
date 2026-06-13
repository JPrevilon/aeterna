import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Card";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { Button } from "@/components/Buttons";
import { Accordion } from "@/components/Accordion";
import { byCategory, featured } from "@/data/services";
import { meta } from "@/lib/seo";
import { ServiceQuickStats } from "@/components/ServiceQuickStats";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata = meta({
  title: "Emsella — Pelvic Floor Wellness",
  description: "Emsella non-invasive pelvic floor wellness in Hollywood, Florida — for men and women. No surgery, no downtime. Single sessions and 6-session packages. Results vary.",
  path: "/services/emsella"
});

const benefits = [
  { title: "Fully Clothed Treatment", body: "Emsella is performed while fully clothed — sitting in the treatment chair for approximately 30 minutes per session." },
  { title: "Non-Invasive", body: "No surgery, no incisions, no injections. Emsella uses high-intensity focused electromagnetic energy delivered externally." },
  { title: "No Downtime", body: "Sessions require no recovery time. Most clients resume their regular schedule immediately after treatment." },
  { title: "Urinary Incontinence Support", body: "Emsella may help support urinary incontinence concerns. Provider evaluation determines whether Emsella is appropriate for your individual situation. Results vary." },
  { title: "Available for Men & Women", body: "Emsella is designed for both men and women experiencing pelvic floor and intimate wellness concerns, presented in a private, discreet setting." }
];

const packages = [
  { title: "Single Session", price: "From $350", time: "30 min", note: "Explore pelvic floor treatment with a single visit." },
  { title: "6-Session Package", price: "From $1,800", time: "6 sessions", note: "Recommended series for best pelvic floor support.", recommended: true }
];

const faqs = [
  { q: "How does Emsella work?", a: "Emsella uses high-intensity focused electromagnetic (HIFEM) energy to stimulate pelvic floor muscle contractions — thousands of contractions per session — while you sit comfortably in the treatment chair, fully clothed." },
  { q: "Is Emsella appropriate for both men and women?", a: "Yes. Emsella is designed for both men and women experiencing pelvic floor concerns. Your provider will review your specific situation, symptoms, and goals during consultation." },
  { q: "Is there any discomfort during treatment?", a: "Most clients experience a tingling or vibrating sensation during the session, which is generally well-tolerated. There is no pain and no downtime. Sensation intensity can be adjusted." },
  { q: "How many sessions are recommended?", a: "A series of 6 sessions is typically recommended for the best outcomes. Your provider will design a treatment plan based on your individual needs, goals, and clinical evaluation." }
];

export default function EmsellaPage() {
  const services = byCategory("Pelvic Floor Wellness");
  const related = featured.filter(s => ["Body Sculpting", "Skin Tightening & Cellulite", "Hormone Balance"].includes(s.category)).slice(0, 3);

  return <>
    <PageHero
      eyebrow="Emsella"
      title="A private, non-invasive path to pelvic floor wellness."
      copy="Emsella is designed to support pelvic floor strength, intimate wellness, and urinary incontinence concerns — for men and women — in a calm, discreet, and dignified treatment setting. Consultation required. Results vary."
      image="/assets/photos/aeterna-treatment-room.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Sessions", value: "6 recommended" },
      { label: "Time", value: "30 min" },
      { label: "Downtime", value: "None", highlight: true },
      { label: "From", value: "$350/session" }
    ]} />

    {/* Benefits */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-sage">The Emsella Experience</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">Designed for discretion and results.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/70">Pelvic floor wellness is deeply personal. Emsella is designed to address it with clinical precision and spa-level discretion — without surgery, discomfort, or judgment.</p>
        </div>
        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map(b => (
            <RevealItem key={b.title}>
              <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
                <p className="font-display text-2xl text-espresso">{b.title}</p>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{b.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Reveal>

    {/* Packages + services */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Pricing & Packages</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Choose your plan.</h2>
        <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2">
          {packages.map(pkg => (
            <RevealItem key={pkg.title}>
              <div className={`rounded-5xl border p-6 shadow-soft ${pkg.recommended ? "border-sage bg-gradient-to-b from-sage/10 to-olive/5" : "border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75"}`}>
                {pkg.recommended && <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-sage">Recommended</p>}
                <p className="font-display text-2xl text-espresso">{pkg.title}</p>
                <p className="mt-1 text-2xl font-semibold text-espresso">{pkg.price}</p>
                <p className="mt-1 text-xs uppercase tracking-[.14em] text-cocoa/50">{pkg.time}</p>
                <p className="mt-3 text-sm leading-6 text-cocoa/70">{pkg.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <div className="mb-8 mt-12 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Book Emsella</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">All Emsella options.</h2>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2">
          {services.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
        </RevealStagger>
      </div>
    </section>

    {/* FAQ */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Questions & Answers</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Frequently asked.</h2>
        <div className="mt-8"><Accordion items={faqs}/></div>
      </div>
    </Reveal>

    {/* Disclaimer + CTA */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <MedicalDisclaimer/>
        <div className="mt-10 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Your Private Consultation</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Begin with a calm, private consultation.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Emsella consultations are private, respectful, and unhurried. Your provider will review your goals, confirm eligibility, and design a plan tailored to your needs.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Consultation</Button>
            <Button href="/book" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">Request Appointment</Button>
          </div>
        </div>
      </div>
    </section>

    {related.length > 0 && (
      <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 border-b border-champagne/30 pb-6">
            <p className="text-xs uppercase tracking-luxury text-sage">Continue Exploring</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Related treatments.</h2>
          </div>
          <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
          </RevealStagger>
        </div>
      </section>
    )}
    <div className="h-24 md:hidden" aria-hidden="true" />
    <StickyMobileCTA href="/consultation" label="Book Consultation" subtext="Consultation Required" />
  </>;
}
