// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  // Tjek om brugeren er logget ind (f.eks. tjek localStorage eller cookies)
  const isAuthenticated = req.cookies.get("isAuthenticated"); // eller tjek localStorage i browseren

  // Hvis brugeren ikke er logget ind, omdiriger til login-siden
  if (!isAuthenticated && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Hvis brugeren er logget ind, fortsæt til den ønskede side
  return NextResponse.next();
}

// Definerer hvilke ruter, der middleware skal køre for
export const config = {
  matcher: ["/forside", "/", "/login"], // Denne matcher kan tilpasses afhængigt af, hvilke ruter du vil beskytte
};
