'use client'
import { useAppDispatch } from '@/redux/hooks';
import { postResetPassword } from '@/thunks/authThunk';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ResetPassword = () => {
    const router = useRouter()
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch()

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    return (
        <div className='flex items-center flex-col gap-10 justify-center h-screen w-screen'>
            <label htmlFor="newPassword">New password</label>
            <input type="password" name='newPassword' onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <button className="bg-white text-black rounded-xl p-2" onClick={() => {
                dispatch(postResetPassword({ password, token, router }))

            }} type="submit">submit
            </button>
        </div>
    )
}

export default ResetPassword