"use client";
import React from "react";
import { signIn, signOut, useSession, } from "next-auth/react";
import client from "@/sanityConfig";
import { postLogin } from "@/thunks/authThunk";
import { useAppDispatch } from "@/redux/hooks";



const SigninButton = () => {
    const dispatch = useAppDispatch()
    const { data: session } = useSession();
    console.log({ session })

    async function getUserData() {
        // const user = await client.fetch(`*[_type == "user"]`);
        dispatch(postLogin())

        // console.log({ user })
    }

    if (session && session.user) {
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session.user.name}</p>
                <button onClick={() => signOut()} className="text-red-600">
                    Sign Out
                </button>
            </div>
        );
    }
    return (
        <div className="flex items-center flex-col gap-10 justify-center h-screen w-screen">
            <button onClick={() => signIn('google')} className="text-red-500 p-2 rounded-xl font-bold bg-white">
                Sign In with google
            </button>

            <p className="bg-white text-black  p-2 rounded-xl cursor-pointer" onClick={getUserData} >fetch user data</p>
        </div>
    );
};

export default SigninButton;