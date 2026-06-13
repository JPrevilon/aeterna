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
  title: "Testosterone & Men's Health",
  description: "Private testosterone consultations and provider-guided TRT programs in Hollywood, Florida. Men's health, energy, and hormone wellness when clinically appropriate. Results vary.",
  path: "/services/testosterone-mens-health"
});

const benefits = [
  { title: "Private Consultation", body: "A discreet, unhurried consultation to discuss your symptoms, goals, and options — without judgment." },
  { title: "Provider-Guided Programs", body: "TRT and related programs are designed individually around your labs, health history, and clinical eligibility." },
  { title: "Energy & Performance Support", body: "Programs are designed to support energy, mood, strength, libido, and overall men's health when appropriate." },
  { title: "Lab-Guided Care", body: "Labs may be recommended to evaluate testosterone levels and related markers before and during your program." }
];

const bestFor = ["Men exploring TRT", "Energy and performance goals", "Hormone wellness", "Lab-guided support", "Low testosterone concerns", "Men's health planning"];

const faqs = [
  { q: "What does the consultation include?", a: "Your provider will review your symptoms, goals, health history, and may recommend labs. You'll leave with a clear picture of your options and whether TRT or another approach may be appropriate for you." },
  { q: "Do I need labs before starting a TRT program?", a: "Labs are commonly recommended to evaluate testosterone levels and related markers. They may be ordered at or following your initial consultation depending on your history and goals." },
  { q: "How long does it take to notice changes with TRT?", a: "Individual response varies significantly. Some clients notice changes within a few weeks; others may take 2–3 months. Your provider will monitor your progress and adjust your protocol as needed. Results are not guaranteed." },
  { q: "Is TRT appropriate for me?", a: "Candidacy depends on your symptoms, health history, lab results, and clinical evaluation. Not every client will qualify. Your consultation is the first step to understanding what may be appropriate for your individual situation." }
];

export default function TestosteroneMensHealthPage() {
  const services = byCategory("Testosterone & Men's Health");
  const related = featured.filter(s => ["Hormone Balance", "Wellness Shots", "IV Therapy"].includes(s.category)).slice(0, 3);

  return <>
    <PageHero
      eyebrow="Testosterone & Men's Health"
      title="Private men's health care, provider-guided."
      copy="A calm, discreet path to testosterone wellness and men's health support — beginning with a private consultation and designed around your labs, goals, and clinical eligibility. Results vary."
      image="/assets/photos/aeterna-storefront-door.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Start", value: "Free Consult", highlight: true },
      { label: "Program", value: "Monthly" },
      { label: "Labs", value: "May be included" },
      { label: "From", value: "$299/mo" }
    ]} />

    {/* Benefits */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Men&apos;s Health at Aeterna</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">Care designed around your biology.</h2>
            <p className="mt-6 text-base leading-8 text-cocoa/70">Testosterone wellness is a deeply individual conversation. At Aeterna, it begins with listening — reviewing your symptoms, goals, and labs in a private, supportive setting before any program is recommended.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation">Book Consultation</Button>
              <Button href="/book" variant="outline">Request Appointment</Button>
            </div>
          </div>
          <RevealStagger className="grid gap-5">
            {benefits.map(b => (
              <RevealItem key={b.title}>
                <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-5 shadow-soft">
                  <p className="font-display text-xl text-espresso">{b.title}</p>
                  <p className="mt-2 text-sm leading-7 text-cocoa/70">{b.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </Reveal>

    {/* Best for + services */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-8 rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-luxury text-sage">Best For</p>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-champagne/25 pt-4">
              {bestFor.map(tag => (
                <span key={tag} className="rounded-full border border-cocoa/10 bg-cream/85 px-4 py-2 text-sm text-cocoa/75 shadow-inset">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mb-10 mt-10 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Programs & Consultations</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Choose your path.</h2>
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
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Begin Your Journey</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Start with a private consultation.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your consultation is private, unhurried, and without obligation. Aeterna will review your goals and let you decide on next steps at your own pace.</p>
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
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Related services.</h2>
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
