import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/header/headerSlice"
import postReducer from "./slices/CreatePost/createPostSlice"
import usersReducer from "./slices/GetUsers/getUsersSlice"

export const store = configureStore({
  reducer:{
    header: headerReducer,
    post: postReducer,
    users: usersReducer,
  }
  
})