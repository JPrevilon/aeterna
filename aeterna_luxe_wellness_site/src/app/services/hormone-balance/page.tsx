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
  title: "Hormone Balance",
  description: "Consultation-first hormone wellness in Hollywood, Florida — estradiol, progesterone, testosterone, and related support when clinically appropriate. Results vary.",
  path: "/services/hormone-balance"
});

const benefits = [
  { title: "Comprehensive Consultation", body: "Your provider reviews your symptoms, goals, and health history to determine what may be clinically appropriate." },
  { title: "Women's Hormone Wellness", body: "Support for estradiol, progesterone, and related hormone concerns for women seeking balance and clarity." },
  { title: "Lab-Guided Planning", body: "Labs are recommended when appropriate to guide hormone wellness decisions with precision." },
  { title: "Personalized Programs", body: "No two hormone plans are the same. Programs are designed around your individual evaluation and clinical eligibility." }
];

const bestFor = ["Women's hormone health", "Perimenopause support", "Hormone imbalance concerns", "Fatigue and mood wellness", "Provider-guided balance", "Longevity planning"];

const faqs = [
  { q: "What hormones are addressed in a consultation?", a: "Consultations may address testosterone, estradiol, progesterone, and related hormone markers depending on your symptoms, goals, and health history." },
  { q: "Are labs required before treatment?", a: "Labs are commonly recommended to guide hormone wellness planning and ensure clinical appropriateness. Your provider will order appropriate tests based on your consultation and individual needs." },
  { q: "How is eligibility determined?", a: "Eligibility is determined through provider evaluation, symptom review, health history, and labs when appropriate. Not every client will qualify for hormone therapy. Your consultation will clarify what options may be available." },
  { q: "Are hormone wellness services available for men and women?", a: "Yes. Hormone wellness consultations are available for both men and women. Men interested in testosterone-specific care may also explore our Testosterone & Men's Health consultation." }
];

export default function HormoneBalancePage() {
  const services = byCategory("Hormone Balance");
  const related = featured.filter(s => ["Testosterone & Men's Health", "Anti-Aging & Longevity", "Medical Weight Loss"].includes(s.category)).slice(0, 3);

  return <>
    <PageHero
      eyebrow="Hormone Balance"
      title="A private, clinical path to hormone wellness."
      copy="Consultation-first hormone wellness support for estradiol, progesterone, testosterone, and related concerns — provider-guided with precision, care, and realistic expectations. Results vary."
      image="/assets/photos/aeterna-storefront-door.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Start", value: "Free Consult", highlight: true },
      { label: "Program", value: "Monthly" },
      { label: "Labs", value: "Recommended" },
      { label: "From", value: "$299/mo" }
    ]} />

    {/* Intro + benefits */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-sage">The Aeterna Approach</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">Hormone care that begins with listening.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/70">Hormone balance is nuanced. Before any treatment is discussed, your provider takes the time to understand your full picture — symptoms, history, and goals — so any plan that follows is truly personalized.</p>
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
          <p className="text-xs uppercase tracking-luxury text-sage">Consultations & Programs</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Begin with a consultation.</h2>
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
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Get Started</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">A private consultation, when you&apos;re ready.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your hormone wellness conversation begins privately, with a provider who listens first. No rush, no sales. Just a calm, clinically guided path forward.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Consultation</Button>
            <Button href="/services/testosterone-mens-health" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">Men&apos;s Health →</Button>
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
