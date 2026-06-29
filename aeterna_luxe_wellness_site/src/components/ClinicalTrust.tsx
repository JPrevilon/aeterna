import { BadgeCheck, ClipboardCheck, ShieldCheck, Stethoscope } from "lucide-react";

const trustItems = [
  { icon: Stethoscope, title: "Consultation-first care", copy: "Medical pathways begin with a thoughtful review of your goals and health history." },
  { icon: null, title: "Rx when appropriate", copy: "Prescription options are considered only after provider evaluation and eligibility review." },
  { icon: ClipboardCheck, title: "Safety & eligibility screening", copy: "Treatment plans are personalized around clinical appropriateness, not a one-size-fits-all menu." },
  { icon: ShieldCheck, title: "Private, respectful experience", copy: "A discreet setting designed for clear conversations, informed choices, and calm follow-up." }
] as const;

export function ClinicalTrust() {
  return (
    <section className="border-y border-clinical/15 bg-mist px-6 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-clinical">Clinical confidence</p>
            <h2 className="mt-2 font-display text-4xl text-espresso md:text-5xl">Medical wellness, with clarity built in.</h2>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-clinical/20 bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] text-clinical shadow-inset">
            <BadgeCheck className="h-4 w-4" aria-hidden /> Provider-guided care
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-4xl border border-clinical/15 bg-cream p-5 shadow-soft">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clinical text-cream shadow-lift">
                {Icon ? <Icon className="h-5 w-5" aria-hidden /> : <span className="font-display text-xl font-bold leading-none">Rx</span>}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-espresso">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-cocoa/65">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
