import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import client from '@/sanityConfig';


export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();
        const { token, password } = reqBody;

        const user = await client.fetch(`*[
        _type == "user" && 
        forgotPasswordToken == $token && 
        forgotPasswordExpiry > $currentTime 
        ][0]`, { token, currentTime: Date.now() });


        if (!user) {
            return NextResponse.json({ message: "Invalid token" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt)

        await client.patch(user._id).set({
            forgotPasswordToken: '',
            forgotPasswordExpiry: 0,
            password: hashPassword
        }).commit()

        return NextResponse.json({ message: "Password changed successfully", status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }







}