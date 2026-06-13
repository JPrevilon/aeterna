import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status:401,
    headers:{ "WWW-Authenticate":'Basic realm="Aeterna Admin"' }
  });
}

export function middleware(request:NextRequest) {
  const username = process.env.ADMIN_BASIC_USER;
  const password = process.env.ADMIN_BASIC_PASSWORD;

  if(!username || !password) return NextResponse.next();

  const header = request.headers.get("authorization");
  if(!header?.startsWith("Basic ")) return unauthorized();

  const decoded = atob(header.slice(6));
  const separator = decoded.indexOf(":");
  const suppliedUser = separator >= 0 ? decoded.slice(0, separator) : "";
  const suppliedPassword = separator >= 0 ? decoded.slice(separator + 1) : "";

  if(suppliedUser !== username || suppliedPassword !== password) return unauthorized();

  return NextResponse.next();
}

export const config = {
  matcher:["/admin/:path*", "/api/admin/:path*"]
};
