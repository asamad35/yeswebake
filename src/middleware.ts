import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup';

    const encodedToken = request.cookies.get('next-auth.session-token')?.value || '';

    console.log({ encodedToken })

    if (isPublicPath && encodedToken) {
        return NextResponse.redirect(new URL('/home', request.url))
    }

    if (!isPublicPath && !encodedToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/profile', '/profile/:path*', '/login', '/signup',],
}