import { type NextRequest, NextResponse } from "next/server";

// Demo mode: authentication is intentionally bypassed until Supabase
// production credentials are connected. Keep the proxy lightweight so
// /login and /dashboard work without server-side auth configuration.
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
