import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/header/headerSlice"
import loginReducer from "./slices/auth/loginSlice"


export const store = configureStore({
  reducer:{
    header: headerReducer,
    login: loginReducer,
  }
  
})