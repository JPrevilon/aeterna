"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Activity, ArrowRight, Droplets, HeartHandshake, UserCheck, Zap } from "lucide-react";
import { BookingBuilder } from "@/components/BookingBuilder";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

type PathCard = {
  key: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
  cta: string;
  tags?: string[];
  featured?: boolean;
  requiresConsult?: boolean;
  href?: string;
  slug?: string;
};

const paths: PathCard[] = [
  {
    key: "weight-loss",
    badge: "Free · Most Popular",
    icon: HeartHandshake,
    title: "Medical Weight Loss",
    description: "Semaglutide, Tirzepatide, GLP-1 programs, and NAD+ protocols — personalized by a licensed provider.",
    price: "Free Consultation",
    cta: "Start Free Consultation",
    tags: ["Provider-guided treatment", "Results vary", "No commitment"],
    href: "/consultation",
    featured: true,
    requiresConsult: true,
  },
  {
    key: "shots",
    badge: "Quick Visit",
    icon: Zap,
    title: "Wellness Shots",
    description: "B12, Glutathione, Lipo-C, Amino Acid, and Vitamin D3. 10-minute visits. No prior intake required.",
    price: "From $35",
    cta: "Book a Shot",
    slug: "b12-wellness-shot",
    featured: false,
    requiresConsult: false,
  },
  {
    key: "iv",
    badge: "Appointment",
    icon: Droplets,
    title: "IV Therapy",
    description: "Hydration, immune support, energy recovery, and NAD+ IV infusions for whole-body restoration.",
    price: "From $159",
    cta: "Book IV Therapy",
    slug: "hydration-boost-iv-b12",
    featured: false,
    requiresConsult: false,
  },
  {
    key: "sculpting",
    badge: "Consultation Required",
    icon: Activity,
    title: "Body Sculpting",
    description: "Emsculpt Neo, Emtone, Emsella, and Exilis Ultra — all personalized with a complimentary consultation.",
    price: "Free Consultation",
    cta: "Book Consultation",
    tags: ["Provider-guided treatment", "Results vary", "No commitment"],
    href: "/consultation?service=emsculpt-neo-consultation",
    featured: false,
    requiresConsult: true,
  },
  {
    key: "hormone",
    badge: "Consultation Required",
    icon: UserCheck,
    title: "Hormone & Men's Health",
    description: "Hormone balance, testosterone wellness, and TRT programs when clinically appropriate.",
    price: "$99 · Free with Enrollment",
    cta: "Book Consultation",
    tags: ["Provider-guided treatment", "Results vary"],
    href: "/consultation?service=hormone-balance-consultation",
    featured: false,
    requiresConsult: true,
  },
];

export function BookPageContent() {
  const [preselect, setPreselect] = useState<string | undefined>();
  const formRef = useRef<HTMLDivElement>(null);

  function activateForm(slug: string) {
    setPreselect(slug);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <>
      {/* Dark hero */}
      <section className="linen bg-espressoGlow px-6 pb-20 pt-24 text-cream md:px-8 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-luxury text-champagne">Book</p>
            <h1 className="mt-4 max-w-3xl font-display text-6xl leading-tight text-cream md:text-7xl">
              Begin your Aeterna journey.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/70">
              Some visits are ready to book directly. Medical and wellness programs begin with a complimentary provider consultation — no commitment required.
            </p>
          </Reveal>
          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2.5 rounded-3xl border border-cream/10 bg-cream/5 px-5 py-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
              <p className="text-sm text-cream/75">
                <span className="font-semibold text-cream">Appointment:</span> Wellness shots and IV therapy
              </p>
            </div>
            <div className="flex items-center gap-2.5 rounded-3xl border border-cream/10 bg-cream/5 px-5 py-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
              <p className="text-sm text-cream/75">
                <span className="font-semibold text-cream">Consultation first:</span> Medical and device treatments
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 booking path cards */}
      <section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Choose Your Path</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-espresso">What brings you in?</h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {paths.map((path) => {
              const Icon = path.icon;
              const cardClasses = `group flex h-full flex-col rounded-5xl border p-7 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxury ${
                path.featured
                  ? "border-espresso/40 bg-espressoGlow"
                  : path.requiresConsult
                  ? "border-sage/20 bg-gradient-to-b from-cream to-vanilla/75"
                  : "border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75"
              }`;

              const cardInner = (
                <>
                  <span className={`inline-flex self-start rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[.14em] ${
                    path.featured
                      ? "bg-champagne/20 text-champagne"
                      : path.requiresConsult
                      ? "border border-sage/30 bg-sage/10 text-sage"
                      : "border border-cocoa/10 bg-cream/80 text-cocoa/55"
                  }`}>{path.badge}</span>

                  <div className={`mt-6 flex h-12 w-12 items-center justify-center rounded-full ${
                    path.featured
                      ? "bg-cream/10 text-champagne"
                      : "border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/80 text-sage shadow-inset"
                  }`}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>

                  <p className={`mt-5 font-display text-3xl leading-snug ${path.featured ? "text-cream" : "text-espresso"}`}>
                    {path.title}
                  </p>
                  <p className={`mt-3 grow text-sm leading-7 ${path.featured ? "text-cream/70" : "text-cocoa/65"}`}>
                    {path.description}
                  </p>

                  {path.tags && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {path.tags.map((tag) => (
                        <span key={tag} className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                          path.featured ? "bg-cream/10 text-cream/60" : "bg-vanilla text-cocoa/50"
                        }`}>{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className={`mt-6 flex items-center justify-between border-t pt-5 ${path.featured ? "border-cream/10" : "border-cocoa/10"}`}>
                    <p className={`text-sm font-semibold ${path.featured ? "text-champagne" : "text-espresso"}`}>
                      {path.price}
                    </p>
                    <span className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[.13em] transition-all duration-300 group-hover:gap-2.5 ${
                      path.featured ? "text-champagne" : "text-sage"
                    }`}>
                      {path.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </>
              );

              if (path.href) {
                return (
                  <RevealItem key={path.key}>
                    <Link href={path.href} className={cardClasses}>{cardInner}</Link>
                  </RevealItem>
                );
              }

              return (
                <RevealItem key={path.key}>
                  <button
                    type="button"
                    onClick={() => activateForm(path.slug ?? "")}
                    className={`${cardClasses} w-full text-left`}
                  >
                    {cardInner}
                  </button>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Two-path explainer */}
      <section className="bg-vanilla px-6 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/80 p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Book an Appointment</p>
              <p className="mt-3 font-display text-3xl text-espresso">Shots & IV Therapy</p>
              <p className="mt-3 text-sm leading-7 text-cocoa/70">Wellness shots and IV therapy are available for direct booking. No prior consultation required. Walk-in and appointment options available.</p>
            </div>
            <div className="rounded-5xl border border-sage/20 bg-gradient-to-b from-sage/5 to-olive/5 p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-luxury text-sage">Start with a Consultation</p>
              <p className="mt-3 font-display text-3xl text-espresso">Medical & Device Treatments</p>
              <p className="mt-3 text-sm leading-7 text-cocoa/70">Medical weight loss, body sculpting, hormone programs, and men&apos;s health all begin with a complimentary provider consultation. No commitment required at your first visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment booking form */}
      <div ref={formRef} id="booking-form" className="scroll-mt-20 bg-vanilla px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-luxury text-sage">Appointment Request</p>
            <h2 className="mt-2 font-display text-5xl leading-tight text-espresso">Request your visit.</h2>
            <p className="mt-3 text-sm leading-7 text-cocoa/65">
              For wellness shots, IV therapy, and follow-up appointments. Medical programs begin with a consultation above.
            </p>
          </div>
          <BookingBuilder preselect={preselect} />
        </div>
      </div>
    </>
  );
}
