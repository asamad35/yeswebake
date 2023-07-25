import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import client from '@/sanityConfig';
// import { sendEmail } from "@/helpers/mailer";


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log({ username, email, password }, 'addddddddddddddd');

        //check if user already exists

        const user = await client.fetch(
            `*[_type == "user" && email == $email][0]`, { email }
        );

        console.log({ user })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt)

        const newUser = await client.create({ username, email, password: hashPassword, _type: 'user' },)



        console.log(newUser);

        // send email
        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        return NextResponse.json({ newUser, success: true, message: "user created successfully" })
    }
    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


