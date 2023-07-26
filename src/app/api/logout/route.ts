import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,

        }, { status: 200 })

        response.cookies.set('next-auth.session-token', '')
        response.cookies.set('token', '')

        return response
    }
    catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}