import { PageHero } from "@/components/PageHero";
import { meta } from "@/lib/seo";
export const metadata = meta({title:"FAQ", description:"Answers about Aeterna spa booking, consultation-required medical wellness, eligibility, pricing, and results variability in Hollywood, Florida.", path:"/faq"});
const faqs = [
  ["Do I need a consultation?","Spa services can usually be requested directly. Medical weight-loss, hormone wellness, IV therapy, injectables, and advanced device treatments require intake and provider approval."],
  ["How is medical wellness eligibility decided?","Eligibility may depend on health history, current medications, goals, contraindications, labs, and provider evaluation. Recommendations are made only when clinically appropriate."],
  ["Are prices final?","Service pricing may vary by treatment length, package planning, provider review, and selected enhancements. Aeterna will confirm details before your appointment."],
  ["Does payment guarantee approval?","No. Payment, inquiry, or consultation does not guarantee eligibility, prescription approval, treatment approval, or a specific result."],
  ["Can I book online?","Yes. Submit a booking or consultation request and Aeterna will follow up to confirm availability and next steps."],
  ["Do results vary?","Yes. Wellness, aesthetic, and medical treatment results vary by client and require appropriate consultation."]
];
export default function FAQPage(){return <><PageHero eyebrow="FAQ" title="Questions before your ritual."/><section className="linen bg-cream px-6 py-16 md:px-8 lg:py-24"><div className="mx-auto grid max-w-4xl gap-4">{faqs.map(([q,a])=><div key={q} className="rounded-4xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-6 shadow-soft"><h2 className="font-display text-3xl text-espresso">{q}</h2><p className="mt-3 leading-7 text-cocoa/70">{a}</p></div>)}</div></section></>}
