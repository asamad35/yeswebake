'use client'
import { useAppDispatch } from '@/redux/hooks'
import { postSignup } from '@/thunks/authThunk'
import { SignupType } from '@/tsTypes'
import React, { useState } from 'react'

const SignupPage = () => {

    const [userDetails, setUserDetails] = useState<SignupType>({ username: "", email: "", password: "" });
    const dispatch = useAppDispatch()

    return (
        <div className='flex items-center flex-col gap-10 justify-center h-screen w-screen'>
            <div className='flex gap-4'>
                <label htmlFor="name">User Name: </label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserDetails({ ...userDetails, username: e.target.value }) }} type="text" />
            </div>
            <div className='flex gap-4 '>
                <label htmlFor="email">Email: </label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserDetails({ ...userDetails, email: e.target.value }) }} type="text" />
            </div>
            <div className='flex gap-4'>
                <label htmlFor="Password">Password: </label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserDetails({ ...userDetails, password: e.target.value }) }} type="password" />
            </div>

            <button onClick={() => {
                dispatch(postSignup(userDetails))
            }} type="submit">submit</button>
        </div>
    )
}

export default SignupPage