import { configureStore } from "@reduxjs/toolkit";


import headerReducer from "./slices/header/headerSlice"

export const store = configureStore({
  reducer:{
    header: headerReducer,
  }
  
})