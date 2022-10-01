import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/GetUsers/getUsersSlice"
// import newsSlice from "./slices/sliceNews/newsSlice";
import news from "./slices/sliceNews/newsSlice";
import newsSlice from "./slices/sliceNews/newsSlice"
import  postReducer  from "./slices/post/postSlice";
import headerReducer from "./slices/header/headerSlice"
import loginReducer from "./slices/auth/loginSlice"


export const store = configureStore({
  reducer:{
    post: postReducer,
    newsSlice: newsSlice,
    header: headerReducer,
    post: postReducer,
    users: usersReducer,
    login: loginReducer,
  }  
})

