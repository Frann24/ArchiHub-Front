import { configureStore } from "@reduxjs/toolkit";
import  postReducer  from "./slices/post/postSlice";
import headerReducer from "./slices/header/headerSlice"

export const store = configureStore({
  reducer:{
    post: postReducer,
    header: headerReducer,
  }
  
})