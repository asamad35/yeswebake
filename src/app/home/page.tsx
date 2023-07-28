'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getLogout, postThirdPartyAuth } from '@/thunks/authThunk'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from "next-auth/react"
import dynamic from 'next/dynamic'


const HomePage = () => {
    const dispatch = useAppDispatch()
    const authReducer = useAppSelector(state => state.authReducer)
    console.log({ authReducer })
    const router = useRouter()

    const { data: session } = useSession();
    const [isSession, setIsSession] = useState(false)

    useEffect(() => {
        if (session && !isSession) {
            setIsSession(true)
            console.log({ session })
            dispatch(postThirdPartyAuth({
                username: session.user.name,
                email: session.user.email,
                thirdPartyUserImage: session.user.image,
            }))
        }
    }, [session])


    async function logout() {
        dispatch(getLogout({ router }))
        setIsSession(false)
        signOut()
    }

    return (
        <div className="flex items-center flex-col gap-10 justify-center h-screen w-screen">
            <p>Unique ID: {authReducer?.user?._id}</p>
            <p>User Name: {authReducer?.user?.username}</p>
            <p>Email: {authReducer?.user?.email}</p>
            <button onClick={logout} className='bg-white text-black p-2 rounded-xl'>
                Logout
            </button>
        </div>
    )
}


export default dynamic(() => Promise.resolve(HomePage), { ssr: false });