import { NextResponse } from "next/server";
import { syncCatalogToSupabase } from "@/lib/catalog-sync";

export async function POST(request:Request) {
  if(!process.env.ADMIN_BASIC_USER || !process.env.ADMIN_BASIC_PASSWORD) {
    return NextResponse.json({error:"Admin auth is not configured"},{status:403});
  }
  const result = await syncCatalogToSupabase();
  const url = new URL("/admin", request.url);
  url.searchParams.set(result.ok ? "synced" : "sync_error", result.ok ? "1" : result.error || "1");
  return NextResponse.redirect(url, { status:303 });
}
