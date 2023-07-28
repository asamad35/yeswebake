import { createSlice, current } from "@reduxjs/toolkit";
import { postLogin, postSignup, postThirdPartyAuth } from "@/thunks/authThunk";

const initialState = {
  user: {
    _id: '',
    username: '',
    email: '',
    image: '',
  }
};
const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    resetAuthReducer: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.fulfilled, (state, action) => {
        console.log('====================================', { payload: action.payload }, '=====================================');
        state.user = action.payload.data.user
      })
      .addCase(postLogin.pending, (state, action) => {
      })
      .addCase(postLogin.rejected, (state, action) => {
      })

      .addCase(postSignup.fulfilled, (state, action) => {
        console.log('====================================', { payload: action.payload }, '=====================================');
        state.user = action.payload.data.newUser
      })
      .addCase(postSignup.pending, (state, action) => {
      })
      .addCase(postSignup.rejected, (state, action) => {
      })

      .addCase(postThirdPartyAuth.fulfilled, (state, action) => {
        console.log('====================================', { payload: action.payload }, '=====================================');
        state.user = action.payload.data.user
      })
      .addCase(postThirdPartyAuth.pending, (state, action) => {
      })
      .addCase(postThirdPartyAuth.rejected, (state, action) => {
      })



  },
});

export const { resetAuthReducer, } =
  authReducer.actions;

export default authReducer.reducer;
