import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  chatReducer,
});

export default rootReducer;
