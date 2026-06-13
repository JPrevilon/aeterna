import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/Card";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { Button } from "@/components/Buttons";
import { categories, byCategory } from "@/data/services";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Medical Wellness",
  description: "Consultation-first medical wellness in Hollywood, Florida — medical weight loss, wellness shots, IV therapy, hormone balance, testosterone and men's health, body sculpting, skin tightening, pelvic floor wellness, and anti-aging care. Provider-guided when clinically appropriate; results vary.",
  path: "/medical-wellness"
});

const faqs = [
  ["Why is consultation required?", "Medical wellness requests involve intake, eligibility review, and provider evaluation before recommendations are made. This helps Aeterna route you toward options that may be clinically appropriate for your goals and health history."],
  ["How is eligibility decided?", "Eligibility may depend on health history, current medications, goals, contraindications, labs, and provider judgment. Some clients may be advised that a service is not appropriate."],
  ["How does pricing work?", "Program and package pricing may vary by protocol, medication, dose, treatment area, and follow-up needs. Payment or inquiry does not guarantee eligibility, prescription approval, or a specific result."],
  ["Will results vary?", "Yes. Wellness, aesthetic, and medical treatment results vary by individual. Aeterna does not guarantee outcomes, and all provider-guided recommendations are made only when clinically appropriate."]
] as const;

export default function MedicalWellnessPage() {
  return <>
    <PageHero
      eyebrow="Medical Wellness"
      title="Longevity care with a calm luxury experience."
      copy="Consultation-first weight-loss support, provider-guided IV therapy, hormone wellness, body sculpting, and anti-aging care when clinically appropriate. Results vary."
      image="/assets/photos/aeterna-storefront-door.jpeg"
    />
    <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <MedicalDisclaimer />

        {/* Quick-nav grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map(c => (
            <Link key={c.slug} href={`#${c.slug}`}
              className="group rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-5 shadow-soft outline-none transition duration-500 hover:-translate-y-1 hover:border-champagne/40 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">
              <p className="text-xs uppercase tracking-luxury text-sage">Medical Wellness</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-espresso">{c.title}</h2>
              <p className="mt-3 text-sm leading-7 text-cocoa/70">{c.summary}</p>
              <div className="gold-line mt-6 transition duration-500 group-hover:opacity-100"/>
            </Link>
          ))}
        </div>

        {/* Category sections */}
        <div className="mt-16 grid gap-16">
          {categories.map(c => {
            const sectionServices = byCategory(c.title);
            return (
              <section key={c.slug} id={c.slug} className="scroll-mt-32">
                <div className="mb-8 border-b border-champagne/30 pb-6">
                  <p className="text-xs uppercase tracking-luxury text-sage">Consult-First Care</p>
                  <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">{c.title}</h2>
                  <p className="mt-3 max-w-3xl text-cocoa/70">{c.summary}</p>
                </div>
                {sectionServices.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {sectionServices.map(s => <ServiceCard key={s.slug} service={s}/>)}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* FAQ */}
        <section className="mt-16 rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft md:p-8">
          <div className="mb-8 border-b border-champagne/30 pb-6">
            <p className="text-xs uppercase tracking-luxury text-sage">Medical Wellness FAQ</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Calm answers before consultation.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <div key={question} className="rounded-4xl border border-cocoa/10 bg-cream/80 p-5 shadow-inset">
                <h3 className="font-display text-3xl leading-tight text-espresso">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/70">{answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation">Start Consultation</Button>
            <Button href="/policies" variant="outline">Review Policies</Button>
          </div>
        </section>

      </div>
    </section>
    <ConsultationCTA/>
  </>;
}
