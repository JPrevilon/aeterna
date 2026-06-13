import { ShieldCheck } from "lucide-react";

type MedicalDisclaimerProps = {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
};

export function MedicalDisclaimer({ className = "", compact = false, inverted = false }: MedicalDisclaimerProps) {
  const body = "All medical and wellness services are provided for informational and wellness purposes and are not a substitute for professional medical advice, diagnosis, or treatment. Eligibility, treatment plans, and results vary by individual. Consultation is required for medical services.";
  return (
    <aside className={`${inverted ? "border-cream/10 bg-cream/5 text-cream shadow-inset" : "border-champagne/30 bg-gradient-to-b from-cream to-vanilla/80 text-cocoa/75 shadow-inset"} rounded-4xl border p-5 ${className}`}>
      <div className="flex gap-4">
        <span className={`${inverted ? "border-cream/15 bg-cream/10 text-champagne" : "border-cocoa/10 bg-cream text-sage"} mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-inset`}>
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className={`${inverted ? "text-champagne" : "text-sage"} text-xs font-semibold uppercase tracking-luxury`}>Medical Wellness Notice</p>
          <p className={`${compact ? "mt-2 text-sm leading-7" : "mt-3 leading-8"} ${inverted ? "text-cream/70" : "text-cocoa/75"}`}>{body}</p>
          {!compact && <p className={`${inverted ? "text-cream/60" : "text-cocoa/60"} mt-3 text-sm leading-7`}>Aeterna wellness services do not replace emergency care, primary care, or treatment from your personal medical provider.</p>}
        </div>
      </div>
    </aside>
  );
}
