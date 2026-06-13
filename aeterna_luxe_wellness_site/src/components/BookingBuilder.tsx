"use client";
import { Clock, ExternalLink, HeartHandshake, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { services, addOns } from "@/data/services";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { cn } from "@/lib/utils";

const times = ["10:00 AM","11:30 AM","1:00 PM","2:30 PM","4:00 PM","5:30 PM"];
const fieldClass = "w-full rounded-3xl border border-cocoa/10 bg-cream/90 px-5 py-4 text-espresso shadow-inset outline-none transition placeholder:text-cocoa/40 focus:border-sage focus:bg-cream focus-visible:ring-2 focus-visible:ring-sage/30";
const medicalCategories = ["Medical Weight Loss","IV Therapy","Hormone Balance","Testosterone & Men's Health","Body Sculpting","Skin Tightening & Cellulite","Pelvic Floor Wellness","Anti-Aging & Longevity"];
const categoryOptions = ["All", ...Array.from(new Set(services.map(service => service.category)))];

type BookingBuilderProps = {
  intent?: "booking" | "consultation";
  preselect?: string;
};

export function BookingBuilder({ intent = "booking", preselect }: BookingBuilderProps) {
  const startingService = intent === "consultation" ? (services.find(service => service.slug === "medical-weight-loss-consultation") || services[0]) : services[0];
  const [serviceSlug,setServiceSlug] = useState(startingService.slug);
  const [preferredDuration,setPreferredDuration] = useState(startingService.durations[0] || "");
  const [selectedCategory,setSelectedCategory] = useState<string>(intent === "consultation" ? startingService.category : "All");
  const [selected,setSelected] = useState<string[]>([]);
  const [earliestAvailable,setEarliestAvailable] = useState(false);
  const [status,setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [submitted,setSubmitted] = useState<{serviceTitle:string; duration:string; consult:boolean} | null>(null);
  const [clientType,setClientType] = useState<"new"|"returning">("new");
  const service = useMemo(()=>services.find(s=>s.slug===serviceSlug),[serviceSlug]);
  const filteredServices = useMemo(()=>selectedCategory === "All" ? services : services.filter(item => item.category === selectedCategory),[selectedCategory]);
  const isConsultMode = Boolean(service?.consultRequired || intent === "consultation");
  const externalBookingUrl = (process.env.NEXT_PUBLIC_BOOKING_URL || "").trim();
  const showInstantBooking = Boolean(externalBookingUrl) && !isConsultMode;

  useEffect(()=>{
    const requested = new URLSearchParams(window.location.search).get("service");
    const requestedService = services.find(s=>s.slug===requested);
    if(requestedService) selectService(requestedService.slug);
  },[]);
  useEffect(()=>{ if(preselect) selectService(preselect); },[preselect]);

  function selectService(slug:string) {
    const next = services.find(item => item.slug === slug);
    if(!next) return;
    setServiceSlug(slug);
    setPreferredDuration(next.durations[0] || "");
    setSelectedCategory(next.category);
    setStatus("idle");
  }

  function toggle(t:string){ setSelected(cur=>cur.includes(t)?cur.filter(x=>x!==t):[...cur,t]); }

  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const consultationAcknowledgment = formData.get("consultationAcknowledgment") === "on";
    const earliest = formData.get("earliestAvailable") === "on";
    const res = await fetch("/api/booking-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
      ...data,
      serviceSlug,
      preferredDuration,
      preferredDate: earliest ? "" : data.preferredDate,
      preferredTime: earliest ? "" : data.preferredTime,
      earliestAvailable: earliest,
      addOns:selected,
      requestType:isConsultMode ? "consultation" : "booking",
      consultationAcknowledgment
    })});
    setStatus(res.ok ? "success" : "error");
    if(res.ok) {
      setSubmitted({ serviceTitle: service?.title || "Aeterna service", duration: preferredDuration, consult:isConsultMode });
      form.reset();
      setSelected([]);
      setEarliestAvailable(false);
    }
  }

  if(status === "success") {
    return <div className="mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/80 p-7 text-center shadow-luxury md:p-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-sage/20 bg-sage/10 text-sage shadow-inset"><HeartHandshake className="h-6 w-6" aria-hidden /></div>
      <p className="mt-6 text-xs uppercase tracking-luxury text-sage">Request Received</p>
      <h2 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">Thank you. Aeterna will follow up soon.</h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-cocoa/70">{submitted?.consult ? "Your consultation request has been received. Aeterna will confirm next steps, intake details, and eligibility review where needed." : "Your appointment request has been received. Aeterna will confirm availability, timing, and any service details before your visit."}</p>
      {submitted && <p className="mx-auto mt-5 max-w-xl rounded-3xl border border-champagne/30 bg-cream/80 p-4 text-sm text-cocoa/70 shadow-inset">{submitted.serviceTitle}{submitted.duration ? ` · ${submitted.duration}` : ""}</p>}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={()=>setStatus("idle")} className="inline-flex min-h-12 items-center justify-center rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-7 py-3 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">Send Another Request</button>
        <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/20 bg-cream/80 px-7 py-3 text-xs font-semibold uppercase tracking-[.18em] text-espresso shadow-inset outline-none transition duration-500 hover:-translate-y-0.5 hover:bg-vanilla focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">Explore Services</Link>
      </div>
    </div>;
  }

  return <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
    <div className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream to-vanilla/75 p-5 shadow-soft md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">Step 1</p><h2 className="mt-3 font-display text-4xl text-espresso">Choose your ritual.</h2>
      <p className="mt-3 text-sm leading-7 text-cocoa/70">Spa appointments can be requested directly. Medical wellness selections begin as consultation requests.</p>
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {categoryOptions.map(category => <button key={category} type="button" onClick={()=>setSelectedCategory(category)} className={cn("shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[.14em] outline-none transition focus-visible:ring-2 focus-visible:ring-sage/40", selectedCategory===category ? "border-espresso bg-espresso text-cream shadow-lift" : "border-cocoa/10 bg-cream/85 text-espresso shadow-inset hover:border-sage/40 hover:bg-vanilla")}>{category}</button>)}
      </div>
      <div className="mt-4 grid max-h-[560px] gap-3 overflow-y-auto pr-1">{filteredServices.map(item=><button key={item.slug} type="button" onClick={()=>selectService(item.slug)} aria-pressed={serviceSlug===item.slug} className={`rounded-3xl border p-4 text-left shadow-inset outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-sage/30 ${serviceSlug===item.slug?"border-sage bg-sage/10":"border-cocoa/10 bg-cream/75 hover:border-sage/40 hover:bg-cream"}`}><span className="block text-xs uppercase tracking-[.16em] text-sage">{item.category}</span><span className="mt-1 block font-display text-2xl leading-tight text-espresso">{item.title}</span><span className="mt-2 block text-sm text-cocoa/70">{item.priceLabel}</span>{item.consultRequired && <span className="mt-3 inline-flex rounded-full border border-champagne/40 bg-vanilla/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-cocoa/70">Consult required</span>}</button>)}</div>
    </div>
    <form onSubmit={submit} className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream/95 to-vanilla/80 p-5 shadow-luxury backdrop-blur md:p-8">
      <p className="text-xs uppercase tracking-luxury text-sage">{isConsultMode ? "Consult-First Path" : "Step 2"}</p><h2 className="mt-3 font-display text-4xl text-espresso">{isConsultMode ? "Request your consultation." : "Request your appointment."}</h2>
      {service && <p className="mt-3 text-cocoa/70">Selected: <strong>{service.title}</strong> · {service.priceLabel}</p>}
      {showInstantBooking && <div className="mt-5 rounded-4xl border border-sage/20 bg-sage/10 p-5 shadow-inset">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs uppercase tracking-luxury text-sage">Instant Booking Available</p><p className="mt-2 text-sm leading-7 text-cocoa/70">Use Aeterna&apos;s external booking partner for live availability.</p></div>
          <a href={externalBookingUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream">Book Instantly <ExternalLink className="h-4 w-4" aria-hidden /></a>
        </div>
      </div>}
      {isConsultMode ? <div className="mt-5 grid gap-4">
        <div className="rounded-4xl border border-champagne/30 bg-vanilla/60 p-4 shadow-inset">
          <div className="flex flex-wrap gap-2">
            {["Consultation Required","Provider-guided treatment","Results vary"].map(tag=>(
              <span key={tag} className="rounded-full border border-champagne/30 bg-cream/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.14em] text-cocoa/65">{tag}</span>
            ))}
          </div>
        </div>
        <MedicalDisclaimer compact />
        {intent !== "consultation" && <Link href={`/consultation?service=${serviceSlug}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sage bg-gradient-to-b from-sage to-olive px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream"><HeartHandshake className="h-4 w-4" aria-hidden /> Open Consultation Flow</Link>}
      </div> : <p className="mt-4 rounded-3xl border border-champagne/30 bg-vanilla/80 p-4 text-sm leading-6 text-cocoa/70 shadow-inset">This request does not confirm an appointment. Aeterna will follow up with availability and next steps.</p>}
      <p className="mt-7 text-xs uppercase tracking-luxury text-sage">Preferred Duration</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">{(service?.durations || []).map(duration=><label key={duration} className="cursor-pointer rounded-full border border-cocoa/10 bg-cream/90 px-4 py-3 text-center text-sm shadow-inset transition hover:border-sage hover:bg-cream focus-within:ring-2 focus-within:ring-sage/30"><input type="radio" name="preferredDuration" value={duration} checked={preferredDuration===duration} onChange={()=>setPreferredDuration(duration)} className="sr-only peer"/><span className="peer-checked:font-semibold peer-checked:text-sage">{duration}</span></label>)}</div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label><span className="sr-only">Name</span><input name="name" required autoComplete="name" placeholder="Name" className={fieldClass}/></label>
        <label><span className="sr-only">Email</span><input name="email" required type="email" autoComplete="email" placeholder="Email" className={fieldClass}/></label>
        <label><span className="sr-only">Phone</span><input name="phone" autoComplete="tel" placeholder="Phone" className={fieldClass}/></label>
        <label><span className="sr-only">Preferred date</span><input name="preferredDate" type="date" disabled={earliestAvailable} className={cn(fieldClass, earliestAvailable && "cursor-not-allowed opacity-50")}/></label>
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-luxury text-sage">New or Returning Client</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {(["new","returning"] as const).map(type=>(
            <label key={type} className="cursor-pointer rounded-3xl border border-cocoa/10 bg-cream/90 px-4 py-3 text-center text-sm shadow-inset transition hover:border-sage hover:bg-cream focus-within:ring-2 focus-within:ring-sage/30">
              <input type="radio" name="clientType" value={type} checked={clientType===type} onChange={()=>setClientType(type)} className="sr-only peer"/>
              <span className="peer-checked:font-semibold peer-checked:text-sage">{type==="new" ? "New Client" : "Returning Client"}</span>
            </label>
          ))}
        </div>
      </div>
      <label className="mt-5 flex cursor-pointer gap-3 rounded-3xl border border-cocoa/10 bg-cream/90 p-4 text-sm leading-6 text-cocoa/75 shadow-inset transition hover:border-sage/40 focus-within:ring-2 focus-within:ring-sage/30">
        <input name="earliestAvailable" type="checkbox" checked={earliestAvailable} onChange={event=>setEarliestAvailable(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-sage" />
        <span>I want the earliest available appointment.</span>
      </label>
      <p className="mt-7 text-xs uppercase tracking-luxury text-sage">Preferred Time</p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">{times.map(t=><label key={t} className={cn("rounded-full border border-cocoa/10 bg-cream/90 px-4 py-3 text-center text-sm shadow-inset transition focus-within:ring-2 focus-within:ring-sage/30", earliestAvailable ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-sage hover:bg-cream")}><input type="radio" name="preferredTime" value={t} disabled={earliestAvailable} className="sr-only peer"/><span className="peer-checked:font-semibold peer-checked:text-sage">{t}</span></label>)}</div>
      <p className="mt-7 text-xs uppercase tracking-luxury text-sage">Enhancements</p>
      <div className="mt-3 flex flex-wrap gap-2">{addOns.map(a=><button key={a.title} type="button" onClick={()=>toggle(a.title)} aria-pressed={selected.includes(a.title)} className={`rounded-full border px-4 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-sage/30 ${selected.includes(a.title)?"border-sage bg-sage text-cream shadow-lift":"border-cocoa/10 bg-cream/90 text-cocoa shadow-inset hover:border-sage hover:bg-cream"}`}>{a.title} +${a.price}</button>)}</div>
      <label className="mt-5 block"><span className="sr-only">Notes, goals, or questions</span><textarea name="notes" rows={4} placeholder="Notes, goals, or questions" className={`${fieldClass} w-full`}/></label>
      <label className="mt-5 flex cursor-pointer gap-3 rounded-3xl border border-cocoa/10 bg-cream/90 p-4 text-sm leading-6 text-cocoa/75 shadow-inset transition hover:border-sage/40 focus-within:ring-2 focus-within:ring-sage/30">
        <input name="consultationAcknowledgment" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-sage" />
        <span>{isConsultMode ? "I understand consultation is required and results vary." : "I understand this is a request, not a confirmed appointment. Medical wellness services require consultation and results vary."}</span>
      </label>
      <button disabled={status==="loading"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60">{status==="loading"?<><Clock className="h-4 w-4" aria-hidden /> Sending Request...</>:<><Send className="h-4 w-4" aria-hidden /> {isConsultMode ? "Request Consultation" : "Request Appointment"}</>}</button>
      <div aria-live="polite">{status==="error" && <p className="mt-4 text-center text-sm text-red-500">Request failed. Please call the spa directly.</p>}</div>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs uppercase tracking-[.14em] text-cocoa/50"><Sparkles className="h-3.5 w-3.5" aria-hidden /> Calm follow-up, no instant charge</p>
    </form>
  </div>
}
