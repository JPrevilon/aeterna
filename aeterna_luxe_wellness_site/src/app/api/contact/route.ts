import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/validators";
import { supabaseAdmin } from "@/lib/supabase";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request:Request) {
  const limited = rateLimit(request, { keyPrefix:"contact", limit:8, windowMs:15 * 60 * 1000 });
  if(limited.limited) return rateLimitResponse(limited.retryAfter);

  const json = await request.json().catch(()=>null);
  const parsed = leadSchema.safeParse(json);
  if(!parsed.success) return NextResponse.json({error:"Invalid form data"},{status:400});
  const supabase = supabaseAdmin();
  if(supabase) {
    try {
      await supabase.from("leads").insert({...parsed.data, source:"contact_form"});
    } catch {}
  }
  if(process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({ from:process.env.CONTACT_FROM_EMAIL || "Aeterna <onboarding@resend.dev>", to:process.env.CONTACT_TO_EMAIL || "Aeternawellnesshollywood@gmail.com", subject:`New Aeterna inquiry: ${parsed.data.interest || "General"}`, text:JSON.stringify(parsed.data,null,2) });
    } catch {}
  }
  return NextResponse.json({ok:true});
}
