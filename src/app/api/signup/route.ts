import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import client from '@/sanityConfig';
import { createAndSetToken } from '@/helpers/createAndSetToken';


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        //check if user already exists

        const user = await client.fetch(
            `*[_type == "user" && email == $email][0]`, { email }
        );


        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt)

        const newUser = await client.create({ username, email, password: hashPassword, _type: 'user' },)

        const response = NextResponse.json({ newUser, success: true, message: "user created successfully" }, { status: 200 })

        createAndSetToken({ ...newUser, response })

        return response
    }
    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


