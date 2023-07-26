'use client'
import { useAppDispatch } from '@/redux/hooks'
import { getLogout } from '@/thunks/authThunk'
import React from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from "next-auth/react"



const HomePage = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()


    async function logout() {
        dispatch(getLogout({ router }))
        signOut()
    }

    return (
        <div className="flex items-center flex-col gap-10 justify-center h-screen w-screen">
            <button onClick={logout} className='bg-white text-black p-2 rounded-xl'>
                Logout
            </button>
        </div>
    )
}

export default HomePage