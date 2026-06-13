"use client";
import { useState } from "react";
export function NewsletterForm({inverted=false}:{inverted?:boolean}) {
  const [email,setEmail] = useState(""); const [status,setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("loading");
    const res = await fetch("/api/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});
    setStatus(res.ok ? "success" : "error"); if(res.ok) setEmail("");
  }
  return <form onSubmit={submit} className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
    <label>
      <span className="sr-only">Email address</span>
      <input type="email" required autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className={`${inverted ? "border-cream/15 bg-cream/10 text-cream placeholder:text-cream/40 focus-visible:ring-cream/25" : "border-cocoa/15 bg-cream text-espresso placeholder:text-cocoa/40 focus-visible:ring-sage/30"} min-h-12 w-full rounded-full border px-5 text-sm shadow-inset outline-none transition focus:border-sage focus-visible:ring-2`} />
    </label>
    <button disabled={status==="loading"} className={`${inverted ? "border-cream bg-cream text-espresso focus-visible:ring-cream/25" : "border-espresso bg-espresso text-cream focus-visible:ring-sage/40"} min-h-12 rounded-full border px-6 text-xs font-semibold uppercase tracking-[.18em] shadow-lift outline-none transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60`}>{status==="loading" ? "Joining..." : "Join"}</button>
    <div aria-live="polite" className="sm:col-span-2">
      {status==="success" && <p className="text-sm text-sage">You&apos;re on the list.</p>}
      {status==="error" && <p className="text-sm text-red-500">Could not join the list. Please try again.</p>}
    </div>
  </form>
}
