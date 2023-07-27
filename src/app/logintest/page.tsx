"use client";
import { signIn, signOut, useSession, } from "next-auth/react";
import Link from 'next/link';
export default function logintest(){
    return(
    
            
            <div className="mx-auto bg-slate-50 md:flex">
                <div className="md:w-1/2 w-full md:h-screen">
                    <img src="https://images.pexels.com/photos/6408290/pexels-photo-6408290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cake at the top" className="md:h-screen object-cover h-40 w-full"/>
                </div>
                <div className='md:w-1/2  flex flex-col items-center md:justify-center md:h-screen ' >
                <div className=" text-black md:w-96  w-72 mt-8 sm:mt-0">
                    <h1 className="text-4xl my-2">Sign In</h1>
                    <p className="my-2 text-gray-500">Please enter your details to get started</p>
                    <div className='flex justify-between my-2'>
                        <div className='flex'>
                            <button onClick={() => signIn('google')} className='md:w-44 md:h-[42px] bg-[#FF96A5] p-1 rounded-sm w-32'>
                                Google
                            </button>
                        </div>

                        <div className=''>
                            <button  className='md:w-44 md:h-[42px] bg-[#FF96A5] p-1 w-32 rounded-sm'>
                                Facebook
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <hr className='bg-pink-300 md:w-[7.4rem] w-[4.4rem] rounded-sm h-px'/>
                    <span className='mx-3 text-pink-500'>or continue with</span>
                    <hr className='bg-pink-300 md:w-[7.4rem] w-[4.4rem] rounded-sm h-px'/>
                    </div>
                    <label htmlFor="email" className='my-2 '>Email Address</label> <span className="text-pink-600">*</span> 
                    <br />  
                    <input type="email" id="email" name="email" placeholder="Your Email" className='my-2 text-pink-600 p-2 w-full border-2 border-pink-400 rounded-sm outline-none ring-0 placeholder-pink-400'required />
                    <br />
                    <label htmlFor="password" className='my-2'>Password <span className="text-pink-600">*</span></label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="********" className='my-2 text-pink-600 p-2 w-full border-2 border-pink-400 rounded-sm outline-none 'required/>
                    <br />
                    <div className='flex justify-between my-2'>
                    <div className='flex items-center'>
                    <input type="checkbox" name="rememberMe" className='accent-pink-500 ' defaultChecked id="rememberMe" />
                    <label htmlFor="rememberMe" className='text-xs ml-1 text-pink-500' >Remember me</label>
                    </div>
                    <Link href='/' className='text-xs text-pink-500 underline underline-offset-2'>Forgot your password?</Link>
                    </div>
                    <div>
                        <button className='my-2 h-[47px] w-full bg-[#FF597B] text-white rounded-sm'>Sign In</button>
                    </div>
                    <div className="flex justify-center">
                        <Link href='/' className="my-2 text-xs text-pink-500 underline underline-offset-2">Don't have an account? Sign Up</Link>
                    </div>
                    </div>
                </div>
            </div>

    )
}