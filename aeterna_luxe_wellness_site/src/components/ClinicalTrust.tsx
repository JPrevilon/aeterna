import { ClipboardCheck, LockKeyhole, ShieldCheck, Stethoscope, UserRoundCheck } from "lucide-react";

const trustPills = [
  { icon: ShieldCheck, label: "Provider-guided care" },
  { icon: LockKeyhole, label: "Private, respectful intake" },
  { icon: UserRoundCheck, label: "Individual eligibility review" },
  { icon: ClipboardCheck, label: "Treatment only when appropriate" }
] as const;

export function ClinicalTrust() {
  return (
    <section className="relative overflow-hidden border-y border-cocoa/10 bg-vanilla px-6 py-14 md:px-8 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-champagne/30" />
      <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-emerald/10" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-clinical text-cream shadow-lift"><Stethoscope className="h-7 w-7" aria-hidden /></div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-luxury text-emerald">Medical wellness standards</p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-6xl">Real care begins with a thoughtful consultation.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cocoa/70">Your goals, health history, and treatment eligibility are reviewed before a personalized plan is recommended.</p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          {trustPills.map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex min-h-14 items-center gap-3 rounded-full border border-clinical/20 bg-cream px-5 py-3 text-sm font-medium text-cocoa shadow-soft">
              <Icon className="h-5 w-5 shrink-0 text-clinical" aria-hidden />{label}
            </div>
          ))}
          <div className="inline-flex min-h-14 items-center gap-3 rounded-full border border-clinical/20 bg-cream px-5 py-3 text-sm font-medium text-cocoa shadow-soft">
            <span className="font-display text-xl font-bold leading-none text-clinical">Rx</span> Prescription options when clinically appropriate
          </div>
        </div>
        <p className="mx-auto mt-7 max-w-2xl text-xs leading-6 text-cocoa/50">Medical services require provider evaluation. Eligibility and results vary. No prescription or treatment is guaranteed.</p>
      </div>
    </section>
  );
}
