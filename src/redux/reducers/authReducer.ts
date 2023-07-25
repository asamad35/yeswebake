import { createSlice, current } from "@reduxjs/toolkit";
import { postLogin } from "@/thunks/authThunk";

const initialState = {
  user: {},
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
        console.log(action.payload, 'aaaaaaaaa');
        // state.user = action.payload

        // state.user = action.payload.data;
        // state.token = action.payload.token;
        // action.meta.arg.navigate("/chatUI");
      })
      .addCase(postLogin.pending, (state, action) => {
      })
      .addCase(postLogin.rejected, (state, action) => {
      })

  },
});

export const { resetAuthReducer, } =
  authReducer.actions;

export default authReducer.reducer;
