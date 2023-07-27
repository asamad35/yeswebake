import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";
import client from "@/sanityConfig";
import bcryptjs from 'bcryptjs'



export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        const user = await client.fetch(`*[_type == 'user' && email==$email][0]`, { email })

        if (!user) {
            return NextResponse.json({ message: "Email is not registered", status: 400 })
        }

        // creating and setting forgot password token
        const hashedToken = await bcryptjs.hash(user._id.toString(), 10)
        await client.patch(user._id).set({ forgotPasswordExpiry: Date.now() + 3600000, forgotPasswordToken: hashedToken }).commit()

        // sending mail
        const res = await sendEmail({ email, hashedToken })
        console.log({ res })



        return NextResponse.json({ message: "Email sent successfully", status: 200 })

    } catch (error: any) {
        // console.log(error)
        NextResponse.json({ message: error.message }, { status: 500 })
    }
}