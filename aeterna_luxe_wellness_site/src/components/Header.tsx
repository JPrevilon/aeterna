"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu, PhoneCall, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/constants";

const nav = [
  ["/services","Services"],["/medical-wellness","Medical Wellness"],["/weight-loss","Weight Loss"],["/shop","Shop"],["/memberships","Memberships"],["/the-experience","Experience"],["/contact","Contact"]
];

export function Header() {
  const [open,setOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-50 border-b border-cocoa/10 bg-cream/[.82] shadow-[0_1px_0_rgba(255,249,240,.75)] backdrop-blur-2xl">
      <div className="hairline" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 lg:py-4">
        <Link href="/" className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-cocoa/10 bg-cream shadow-inset transition duration-500 group-hover:border-champagne/50">
            <Image src="/assets/logos/aeterna-symbol.png" alt="Aeterna symbol" width={48} height={48} className="h-9 w-9 object-contain" priority />
          </span>
          <div><p className="font-display text-2xl uppercase tracking-[.22em] text-espresso">Aeterna</p><p className="hidden items-center gap-1 text-[10px] uppercase tracking-[.2em] text-emerald sm:flex"><ShieldCheck className="h-3 w-3 text-clinical" aria-hidden/> Luxe Medical Wellness</p></div>
        </Link>
        <nav className="hidden items-center rounded-full border border-cocoa/10 bg-cream/70 px-2 py-2 shadow-inset backdrop-blur lg:flex" aria-label="Primary navigation">{nav.map(([href,label]) => <Link key={href} href={href} className="rounded-full px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[.14em] text-cocoa/75 outline-none transition hover:bg-vanilla hover:text-espresso focus-visible:ring-2 focus-visible:ring-sage/40 xl:px-3 xl:text-[11px] xl:tracking-[.16em]">{label}</Link>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><a href={`tel:${SITE.phone}`} className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[.16em] text-cocoa/70 outline-none transition hover:text-espresso focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">{SITE.phone}</a><Link href="/book" className="rounded-full border border-emerald bg-gradient-to-b from-emerald to-forest px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">Book Now</Link></div>
        <button className="rounded-full border border-cocoa/15 bg-cream p-3 shadow-inset outline-none transition hover:border-sage/50 hover:bg-vanilla focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button>
      </div>
      <div id="mobile-navigation" className={`${open ? "max-h-[620px]" : "max-h-0"} overflow-hidden border-t border-cocoa/10 bg-cream/[.96] shadow-soft backdrop-blur-xl transition-all duration-500 lg:hidden`}>
        <nav className="grid gap-2 px-5 py-5" aria-label="Mobile navigation">{[["/book","Book Now"],...nav].map(([href,label],index) => <Link key={href} href={href} onClick={()=>setOpen(false)} className={`${index===0 ? "bg-espresso text-cream shadow-soft" : "text-espresso hover:bg-vanilla"} rounded-3xl px-4 py-4 text-sm font-semibold uppercase tracking-[.18em] outline-none transition focus-visible:ring-2 focus-visible:ring-sage/40`}>{label}</Link>)}</nav>
      </div>
    </header>
    <div className="fixed inset-x-3 bottom-3 z-50 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-cocoa/10 bg-cream/95 p-2 shadow-luxury backdrop-blur-xl">
        <a href={`tel:${SITE.phone}`} aria-label="Call Aeterna" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/15 bg-vanilla/60 text-espresso outline-none transition hover:border-sage hover:bg-vanilla focus-visible:ring-2 focus-visible:ring-sage/40">
          <PhoneCall className="h-4 w-4" />
        </a>
        <Link href="/book" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-cocoa to-espresso px-5 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition hover:bg-cocoa focus-visible:ring-2 focus-visible:ring-sage/40">
          <CalendarDays className="h-4 w-4" />
          Book Now
        </Link>
      </div>
    </div>
  </>
}
