import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const jwt = request.cookies.get('jwt_token')?.value;

  // Allow access to /auth and static files without JWT
  if (
    request.nextUrl.pathname.startsWith('/auth') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // If no JWT, redirect to /auth
  if (!jwt) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

// Optionally, define which paths to match
export const config = {
  matcher: [
    /*
      Match all routes except:
      - /auth
      - /_next/static
      - /_next/image
      - /favicon.ico
      - /api (if you want to allow unauthenticated API routes)
    */
    '/((?!auth|_next/static|_next/image|favicon.ico|api).*)',
  ],
};