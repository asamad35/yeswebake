import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import client from "@/sanityConfig";
import { createAndSetToken } from "@/helpers/createAndSetToken";

export async function POST(request: NextRequest) {
    try {

        const { email, password } = await request.json();
        // check if user exist by email
        const user = await client.fetch(
            `*[_type == "user" && email == $email]{email, username, userImage, password}[0]`, { email }
        );
        if (!user) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 })
        }
        console.log({ email, password, user });

        // check password
        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 })
        }

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            user,

        }, { status: 200 })

        createAndSetToken({ ...user, response })

        return response

    }
    catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}