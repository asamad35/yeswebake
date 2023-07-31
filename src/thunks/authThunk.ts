import { LoginInterface, ResetPasswordPayload, RouterInterface, SignupType } from "@/tsInterfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const postLogin = createAsyncThunk("postLogin", async (payload: LoginInterface & RouterInterface) => {
  try {
    const { email, password } = payload
    const res = await axios.post('/api/login', { email, password })
    payload.router!.push('/home');
    return res
  } catch (error) {
    console.log(error)
  }
});


export const postSignup = createAsyncThunk("postSignup", async (payload: SignupType & RouterInterface) => {
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

export const postResetPassword = createAsyncThunk("postResetPassword", async (payload: ResetPasswordPayload & RouterInterface) => {
  try {
    const res = await axios.post('/api/resetpassword', { token: payload.token, password: payload.password });
    payload.router!.push('/login');
    return res
  } catch (error) {
    console.log(error)
  }
});

export const postThirdPartyAuth = createAsyncThunk("postThirdPartyAuth", async (payload) => {
  try {
    const res = await axios.post('/api/thirdpartyauth', payload);
    return res
  } catch (error) {
    console.log(error)
  }
});
