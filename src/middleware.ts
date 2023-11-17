// node_modules
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/vendors", request.url));
}

export const config = {
  matcher: "/",
};
