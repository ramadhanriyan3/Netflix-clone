import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const jwtSecret = process.env.NEXTAUTH_JWT_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: jwtSecret });
  const email = token?.email;

  const protectedRoutes = [
    "/home",
    "/profile",
    "/genres",
    "/my-list",
    "/watch",
  ];
  if (protectedRoutes.includes(req.nextUrl.pathname) && !email) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    (req.nextUrl.pathname === "/" ||
      req.nextUrl.pathname.startsWith("/sign-in") ||
      req.nextUrl.pathname.startsWith("/sign-up")) &&
    email
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}
