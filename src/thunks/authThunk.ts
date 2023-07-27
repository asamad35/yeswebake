import { LoginInterface, ResetPasswordPayload, RouterInterface, SignupType } from "@/tsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const postLogin = createAsyncThunk("postLogin", async (payload: LoginInterface) => {
  try {
    const { email, password } = payload
    const res = await axios.post('/api/login', { email, password })
    payload.router!.push('/home');
    return res
  } catch (error) {
    console.log(error)
  }
});


export const postSignup = createAsyncThunk("postSignup", async (payload: SignupType) => {
  try {
    const res = await axios.post('/api/signup', payload)
    payload.router!.push('/home');
    return res
  } catch (error) {
    console.log(error)
  }
});


export const getLogout = createAsyncThunk("getLogout", async (payload: RouterInterface) => {
  try {
    const res = await axios.get('/api/logout');
    payload.router.push('/login')
    return res
  } catch (error) {
    console.log(error)
  }
});

export const postForgotPassword = createAsyncThunk("postForgotPassword", async (payload: { email: string }) => {
  try {
    const res = await axios.post('/api/forgotpassword', payload)
    return res
  } catch (error) {
    console.log(error)
  }
});

export const postResetPassword = createAsyncThunk("postResetPassword", async (payload: ResetPasswordPayload) => {
  try {
    const res = await axios.post('/api/resetpassword', { token: payload.token, password: payload.password });
    payload.router!.push('/login');
    return res
  } catch (error) {
    console.log(error)
  }
});
