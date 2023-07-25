import { createSlice, current } from "@reduxjs/toolkit";
// import * as thunks from "../../thunks";

const initialState = {
  
  
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    resetAuthReducer: () => initialState,
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(thunks.postSignup.fulfilled, (state, action) => {
  //       state.user = action.payload.data;
  //       state.token = action.payload.token;
  //       action.meta.arg.navigate("/chatUI");
  //     })
  //     .addCase(thunks.postSignup.pending, (state, action) => {
  //     })
  //     .addCase(thunks.postSignup.rejected, (state, action) => {
  //     })
      
  // },
});

export const {  resetAuthReducer } =
  cartReducer.actions;

export default cartReducer.reducer;
