export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    '/',
    '/print-version',
    // Protect all routes except auth and API routes
    '/((?!api|auth|_next/static|_next/image|favicon.ico).*)',
  ],
}

