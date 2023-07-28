'use client'
import client from '@/sanityConfig';
import { useAppDispatch } from '@/redux/hooks'
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { getLogout } from '@/thunks/authThunk'
import { useRouter } from 'next/navigation'
import axios from "axios";




const GoogleTest = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()


    const query = `*[_type == 'GoogleLogin'] {
        username,
        email,
        image,
        expiry,
    
      }`;

      client.fetch(query).then((users) => {
        console.log(users);
      }).catch((error) => {
        console.error('Error fetching users:', error);
      });



    const { data: session } = useSession();

    const User = {
        username : session?.user.name,
        email : session?.user.email,
        image : session?.user.image,
        expiry : session?.expires,
    }
    
    // console.log("details are" +User);



    async function logout() {
        dispatch(getLogout({ router }))
        signOut()
    }

    const onSignIn = async() =>{
        const response = await axios.post("/api/GoogleTest",User);      
  }
    
    if (session?.user) {
            onSignIn();
        return (
            <>
            
                <div className="flex items-center flex-col gap-10 justify-center h-screen w-screen">
                    <p>You are already logged in</p>
                    <p>{session?.user.name}</p>
                    <p>{session?.user.email}</p>
                    <p><img src={session?.user.image} alt="Userimage" /></p>

                    <button onClick={logout} className='bg-white text-black p-2 rounded-xl'>
                    Logout
                </button>

                </div>

            </>
        )
    }
    else {



        return (
            <div className="flex items-center flex-col gap-10 justify-center h-screen w-screen">
                <div>


                </div>
                <button onClick={() => signIn('google')} className='bg-white text-black p-2 rounded-xl'>
                    Login krlo dost
                </button>


            </div>


        )
    }
}

export default GoogleTest