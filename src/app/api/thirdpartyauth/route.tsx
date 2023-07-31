import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import client from '@/sanityConfig';


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, thirdPartyUserImage } = reqBody;

        //check if user already exists

        let user = await client.fetch(
            `*[_type == "user" && email == $email && isThirdParty == true][0]`, { email }
        );


        if (user) {
            return NextResponse.json({ message: "User already exists", user }, { status: 200 })
        }
        // const salt = await bcryptjs.genSalt(10);
        // const hashPassword = await bcryptjs.hash(password, salt)

        user = await client.create({ _type: 'user', username, email, thirdPartyUserImage, isThirdParty: true })

        const response = NextResponse.json({ user, success: true, message: "user created successfully" }, { status: 200 })


        return response
    }
    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


