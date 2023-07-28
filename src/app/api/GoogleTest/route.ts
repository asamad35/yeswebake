import { NextRequest, NextResponse } from "next/server";
import client from "@/sanityConfig";
import { createAndSetToken } from "@/helpers/createAndSetToken";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, image,expiry } = reqBody;

        //check if user already exists

        const user = await client.fetch(
            `*[_type == "GoogleLogin" && email == $email][0]`, { email }
        );

       

        if (user) {
            return NextResponse.json({user})
        }


        const newGoogleUser = await client.create({ username, email, image,expiry, _type: 'GoogleLogin' },)

        console.log(newGoogleUser);
        const response = NextResponse.json({ newGoogleUser, success: true, message: "user created successfully" }, { status: 200 })

        // createAndSetToken({ ...newGoogleUser, response })

        return response
    }
    catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

