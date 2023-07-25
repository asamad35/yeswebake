import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import client from "@/sanityConfig";

export async function POST(request: NextRequest) {

    try {
        const { email, password } = await request.json();
        // check if user exist by email
        const user = await client.fetch(
            `*[_type == "user" && email == $email] {email, username, userImage} [0]`, { email }
        );
        if (!user) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 })
        }

        // check password
        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 })
        }

        // create token
        const tokenData = { id: user._id, email: user.email, username: user.username }
        const token = jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET!, { expiresIn: '1d' })

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            user
        }, { status: 200 })

        response.cookies.set('token', token, { httpOnly: true })
        return response

    }
    catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}