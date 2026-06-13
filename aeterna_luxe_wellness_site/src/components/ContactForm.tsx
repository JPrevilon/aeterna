"use client";
import { useState } from "react";
const interests = ["Booking","Medical Weight Loss","GLP-1 Programs","IV Therapy","Wellness Shots","Hormone Balance","Body Sculpting","Anti-Aging / Longevity","Membership","Products","Private Event"];
export function ContactForm() {
  const [status,setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    setStatus(res.ok ? "success" : "error"); if(res.ok) form.reset();
  }
  const input = "w-full rounded-3xl border border-cocoa/10 bg-cream/90 px-5 py-4 text-espresso shadow-inset outline-none transition placeholder:text-cocoa/40 focus:border-sage focus:bg-cream focus-visible:ring-2 focus-visible:ring-sage/30";
  return <form onSubmit={submit} className="rounded-5xl border border-cocoa/10 bg-gradient-to-b from-cream/95 to-vanilla/75 p-5 shadow-soft md:p-8">
    <div className="grid gap-4 sm:grid-cols-2">
      <label><span className="sr-only">Name</span><input name="name" required autoComplete="name" placeholder="Name" className={input}/></label>
      <label><span className="sr-only">Email</span><input name="email" required type="email" autoComplete="email" placeholder="Email" className={input}/></label>
      <label><span className="sr-only">Phone</span><input name="phone" autoComplete="tel" placeholder="Phone" className={input}/></label>
      <label><span className="sr-only">Interest</span><select name="interest" className={input}>{interests.map(i=><option key={i}>{i}</option>)}</select></label>
    </div>
    <label className="mt-4 block"><span className="sr-only">Message</span><textarea name="message" required placeholder="How can Aeterna help you?" rows={5} className={`${input} w-full`}/></label>
    <button disabled={status==="loading"} className="mt-5 rounded-full border border-espresso bg-gradient-to-b from-cocoa to-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[.18em] text-cream shadow-lift outline-none transition duration-500 hover:-translate-y-0.5 hover:shadow-luxury focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60">{status==="loading" ? "Sending..." : "Send Message"}</button>
    <div aria-live="polite">
      {status==="success" && <p className="mt-4 text-sm text-sage">Message sent. Aeterna will follow up soon.</p>}
      {status==="error" && <p className="mt-4 text-sm text-red-500">Message could not be sent. Please call the spa directly.</p>}
    </div>
  </form>
}
