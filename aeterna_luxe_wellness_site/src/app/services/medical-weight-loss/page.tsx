import Image from "next/image";
import Link from "next/link";
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
  title: "Medical Weight Loss",
  description: "Provider-guided medical weight loss in Hollywood, Florida. Semaglutide and Tirzepatide programs when clinically appropriate. Free consultation. Results vary.",
  path: "/services/medical-weight-loss"
});

const benefits = [
  { title: "Free Consultation", body: "Begin with a no-cost private consultation to review your goals, health history, and program options." },
  { title: "Personalized Program", body: "Every plan is designed around your specific goals, health profile, and clinical eligibility." },
  { title: "GLP-1 & Appetite Support", body: "Semaglutide and Tirzepatide pathways designed to support appetite regulation and metabolic wellness when clinically appropriate." },
  { title: "Metabolic Evaluation", body: "Optional metabolic evaluation to help guide energy, body composition, and weight-loss planning." },
  { title: "Monthly Monitoring", body: "Ongoing provider check-ins and program adjustments throughout your weight-loss journey." },
  { title: "Combined Programs", body: "Tirzepatide + NAD+ combined protocols available for clients focused on both weight and longevity." }
];

const bestFor = ["Weight management goals", "GLP-1 interest", "Metabolic support", "Long-term weight care", "Structured programs", "New clients"];

const faqs = [
  { q: "How do I know if I'm a candidate?", a: "During your free consultation, your provider will review your health history, goals, and current medications. Candidacy depends on clinical evaluation — not every client will qualify for GLP-1 programs or prescription support." },
  { q: "What is the difference between Semaglutide and Tirzepatide?", a: "Both are GLP-1 receptor agonists commonly prescribed for weight management support. Tirzepatide also acts on GIP receptors, which may provide additional metabolic benefits. Your provider will recommend the most appropriate option during your consultation." },
  { q: "How long does it take to see results?", a: "Results vary by individual. Most clients in provider-guided programs begin to see meaningful changes within 8–12 weeks when following their personalized protocol. Results are not guaranteed." },
  { q: "Is there a long-term commitment?", a: "Programs are structured on a monthly basis. Ongoing provider evaluation and monitoring are part of the program. Your provider will guide you on the appropriate duration based on your goals and how your body responds." }
];

export default function MedicalWeightLossPage() {
  const services = byCategory("Medical Weight Loss");
  const related = featured.filter(s => s.category !== "Medical Weight Loss").slice(0, 3);

  return <>
    <PageHero
      eyebrow="Medical Weight Loss"
      title="A provider-guided path to sustainable weight loss."
      copy="Aeterna's medical weight loss programs are designed around your goals, health history, and clinical eligibility — with Semaglutide and Tirzepatide pathways available when appropriate. Results vary."
      image="/assets/photos/aeterna-storefront-door.jpeg"
    />
    <ServiceQuickStats stats={[
      { label: "Start", value: "Free Consult", highlight: true },
      { label: "Medication", value: "Semaglutide/Tirzepatide" },
      { label: "Program", value: "Monthly" },
      { label: "From", value: "$299/mo" }
    ]} />

    {/* Benefits */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-sage">What to Expect</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">Clinical support from consultation through progress.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/70">Every medical weight loss journey at Aeterna begins with an honest, private consultation — not a sales pitch. Your provider designs a plan around your biology, not a template.</p>
        </div>
        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map(b => (
            <RevealItem key={b.title}>
              <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
                <p className="font-display text-2xl text-espresso">{b.title}</p>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{b.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12">
          <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
            <p className="text-xs uppercase tracking-luxury text-sage">Best For</p>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-champagne/25 pt-4">
              {bestFor.map(tag => (
                <span key={tag} className="rounded-full border border-cocoa/10 bg-cream/85 px-4 py-2 text-sm text-cocoa/75 shadow-inset">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Reveal>

    {/* Services */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-champagne/30 pb-6">
          <p className="text-xs uppercase tracking-luxury text-sage">Programs & Consultations</p>
          <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Choose your starting point.</h2>
          <p className="mt-3 max-w-2xl text-cocoa/70">All programs begin with a consultation. Prescription pathways are available only when clinically appropriate after provider evaluation.</p>
        </div>
        <RevealStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(s => <RevealItem key={s.slug}><ServiceCard service={s}/></RevealItem>)}
        </RevealStagger>
      </div>
    </section>

    {/* How it works */}
    <Reveal className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-luxury text-sage">The Process</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">What happens after you book.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["01. Free Consultation", "Meet privately with your provider to review your goals, health history, and weight-loss options. No commitment required."],
            ["02. Program Design", "Your provider designs a personalized plan — including medication options when clinically appropriate — based on your evaluation."],
            ["03. Ongoing Support", "Monthly check-ins, program adjustments, and provider guidance throughout your journey. Your progress guides the plan."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">{title.split(".")[0]}.</p>
              <h3 className="mt-2 font-display text-2xl text-espresso">{title.split(". ").slice(1).join(". ")}</h3>
              <p className="mt-3 text-sm leading-7 text-cocoa/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    {/* FAQ */}
    <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-luxury text-sage">Questions & Answers</p>
        <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Frequently asked.</h2>
        <div className="mt-8">
          <Accordion items={faqs}/>
        </div>
      </div>
    </section>

    {/* Disclaimer + CTA */}
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <MedicalDisclaimer/>
        <div className="mt-10 overflow-hidden rounded-[3rem] border border-cocoa/10 bg-espressoGlow p-7 text-cream shadow-luxury md:p-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Begin Your Journey</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Start with a free consultation.</h2>
          <p className="mt-4 text-sm leading-7 text-cream/70">Your consultation is private, unhurried, and obligation-free. Aeterna will review your goals, evaluate your options, and let you decide what feels right.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation" variant="outline" className="border-cream/20 bg-cream text-espresso">Book Free Consultation</Button>
            <Button href="/book" variant="ghost" className="border-cream/10 text-cream hover:bg-cream/10">Request Appointment</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Related */}
    {related.length > 0 && (
      <section className="bg-vanilla px-6 py-16 md:px-8 lg:py-24">
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
    <StickyMobileCTA href="/consultation" label="Book Free Consultation" subtext="Consultation Required" />
  </>;
}
