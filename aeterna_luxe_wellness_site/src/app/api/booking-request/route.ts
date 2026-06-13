import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingSchema } from "@/lib/validators";
import { supabaseAdmin } from "@/lib/supabase";
import { serviceBySlug } from "@/data/services";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request:Request) {
  const limited = rateLimit(request, { keyPrefix:"booking", limit:6, windowMs:15 * 60 * 1000 });
  if(limited.limited) return rateLimitResponse(limited.retryAfter);

  const json = await request.json().catch(()=>null);
  const parsed = bookingSchema.safeParse(json);
  if(!parsed.success) return NextResponse.json({error:"Invalid booking data"},{status:400});
  const supabase = supabaseAdmin();
  const bookingRecord = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    service_slug: parsed.data.serviceSlug,
    preferred_duration: parsed.data.preferredDuration || null,
    preferred_date: parsed.data.preferredDate || null,
    preferred_time: parsed.data.preferredTime || null,
    earliest_available: parsed.data.earliestAvailable,
    add_ons: parsed.data.addOns,
    notes: parsed.data.notes || null,
    understands_consult_required: parsed.data.consultationAcknowledgment
  };
  const selectedService = serviceBySlug(parsed.data.serviceSlug);
  const shouldCreateConsultation = parsed.data.requestType === "consultation" || Boolean(selectedService?.consultRequired);
  if(supabase) {
    try {
      await supabase.from("booking_requests").insert(bookingRecord);
      if(shouldCreateConsultation) {
        await supabase.from("consultation_requests").insert({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          interest: selectedService?.title || parsed.data.serviceSlug,
          service_slug: parsed.data.serviceSlug,
          message: parsed.data.notes || null,
          understands_consult_required: parsed.data.consultationAcknowledgment
        });
      }
    } catch {}
  }
  if(process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({ from:process.env.CONTACT_FROM_EMAIL || "Aeterna <onboarding@resend.dev>", to:process.env.CONTACT_TO_EMAIL || "Aeternawellnesshollywood@gmail.com", subject:"New Aeterna booking request", text:JSON.stringify(parsed.data,null,2) });
    } catch {}
  }
  return NextResponse.json({ok:true});
}
