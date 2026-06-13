import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import { SITE } from "@/lib/constants";
import { NewsletterForm } from "@/components/NewsletterForm";

const cols = [
  ["Explore", [["Services","/services"],["Medical Wellness","/medical-wellness"],["Book","/book"],["Shop","/shop"]]],
  ["Aeterna", [["Experience","/the-experience"],["Memberships","/memberships"],["Gift Cards","/gift-cards"],["Journal","/journal"]]],
  ["Care", [["FAQ","/faq"],["Policies","/policies"],["Contact","/contact"],["Consultation","/consultation"]]]
] as const;

export function Footer() {
  return <footer className="relative overflow-hidden bg-espressoGlow text-cream">
    <Image src="/assets/logos/aeterna-symbol.png" alt="" width={520} height={520} aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 opacity-[.045] mix-blend-screen" />
    <div className="hairline opacity-60" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_1fr] md:px-8 lg:py-24">
      <div>
        <Image src="/assets/logos/aeterna-full-logo.png" alt="Aeterna" width={220} height={180} className="rounded-4xl border border-cream/10 bg-cream/95 p-4 shadow-luxury" />
        <p className="mt-6 max-w-xl text-base leading-8 text-cream/70">A refined sanctuary for beauty, balance, longevity, and renewal. Spa rituals, consultation-first medical wellness, provider-guided IV therapy, body sculpting, and elegant care in Hollywood, Florida.</p>
        <div className="mt-8 grid gap-3 text-sm text-cream/70 sm:grid-cols-[1fr_auto]"><a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/5 px-4 py-3 outline-none transition hover:border-cream/25 hover:text-cream focus-visible:ring-2 focus-visible:ring-cream/25 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso"><Mail className="h-4 w-4"/>{SITE.email}</a><a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/5 px-4 py-3 outline-none transition hover:border-cream/25 hover:text-cream focus-visible:ring-2 focus-visible:ring-cream/25 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso"><Phone className="h-4 w-4"/>{SITE.phone}</a></div>
        <div className="mt-6 flex gap-3"><a href={SITE.instagram} aria-label="Instagram" className="rounded-full border border-cream/15 p-3 outline-none transition hover:border-cream/35 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-cream/25 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso"><Instagram className="h-4 w-4"/></a><a href={SITE.youtube} aria-label="YouTube" className="rounded-full border border-cream/15 p-3 outline-none transition hover:border-cream/35 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-cream/25 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso"><Youtube className="h-4 w-4"/></a></div>
      </div>
      <div>
        <div className="grid gap-8 sm:grid-cols-3">{cols.map(([title,links]) => <div key={title}><p className="text-xs font-semibold uppercase tracking-luxury text-champagne">{title}</p><div className="mt-4 grid gap-3">{links.map(([label,href]) => <Link key={href} href={href} className="rounded-full text-sm text-cream/70 outline-none transition hover:text-cream focus-visible:ring-2 focus-visible:ring-cream/25 focus-visible:ring-offset-4 focus-visible:ring-offset-espresso">{label}</Link>)}</div></div>)}</div>
        <div className="mt-12 rounded-5xl border border-cream/10 bg-cream/5 p-5 shadow-inset backdrop-blur md:p-6"><p className="font-display text-3xl">The Aeterna Letter</p><p className="mt-2 text-sm leading-6 text-cream/65">Seasonal rituals, wellness notes, product releases, and private offers.</p><NewsletterForm inverted /></div>
      </div>
    </div>
    <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/50">© {new Date().getFullYear()} Aeterna Luxe Wellness & Beauty. Results vary. Consultation required for medical wellness services.</div>
  </footer>
}
