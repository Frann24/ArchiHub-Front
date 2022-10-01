import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/auth/loginSlice"

import headerReducer from "./slices/header/headerSlice"

export const store = configureStore({
  reducer:{
    header: headerReducer,
    login: loginReducer
  }
  
})