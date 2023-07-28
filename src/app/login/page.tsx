"use client";
import React, { useState } from "react";
import { signIn, } from "next-auth/react";
import { postForgotPassword, postLogin } from "@/thunks/authThunk";
import { useAppDispatch } from "@/redux/hooks";
import { LoginInterface } from "@/tsTypes";
import { useRouter } from 'next/navigation'



const LoginPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [userDetails, setUserDetails] = useState<LoginInterface>({ email: "", password: "" });






    // if (session && session.user) {
    //     return (
    //         <div className="flex gap-4 ml-auto">
    //             <p className="text-sky-600">{session.user.name}</p>
    //             <button onClick={() => signOut()} className="text-red-600">
    //                 Sign Out
    //             </button>
    //         </div>
    //     );
    // }
    return (
        <div className="flex items-center flex-col gap-10 justify-center h-screen w-screen">

            <div className='flex gap-4'>
                <label htmlFor="email">Email: </label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserDetails({ ...userDetails, email: e.target.value }) }} type="text" />
            </div>
            <div className='flex gap-4 '>
                <label htmlFor="email">Password: </label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserDetails({ ...userDetails, password: e.target.value }) }} type="password" />
            </div>

            <button className="bg-white text-black rounded-xl p-2" onClick={() => {
                dispatch(postLogin({ ...userDetails, router }))

            }} type="submit">submit
            </button>

            <button onClick={async () => {
                dispatch(postForgotPassword({ email: userDetails.email }))
            }} className="bg-white text-black p-2 rounded-xl">Forgot password</button>

            <button onClick={() => signIn('google')} className="text-red-500 p-2 rounded-xl font-bold bg-white">
                Sign In with google
            </button>




        </div>
    );
};

export default LoginPage;