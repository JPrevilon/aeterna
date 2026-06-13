import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { supabaseAdmin } from "@/lib/supabase";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request:Request) {
  const limited = rateLimit(request, { keyPrefix:"newsletter", limit:5, windowMs:10 * 60 * 1000 });
  if(limited.limited) return rateLimitResponse(limited.retryAfter);

  const json = await request.json().catch(()=>null);
  const parsed = newsletterSchema.safeParse(json);
  if(!parsed.success) return NextResponse.json({error:"Invalid email"},{status:400});
  const supabase = supabaseAdmin();
  if(supabase) {
    try {
      await supabase.from("newsletter_subscribers").upsert({email:parsed.data.email,name:parsed.data.name || null},{onConflict:"email"});
    } catch {}
  }
  return NextResponse.json({ok:true});
}
