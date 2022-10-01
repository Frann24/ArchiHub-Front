import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/sliceNews/newsSlice"
import projectReducer from "./slices/project/projectSlice";
import  postReducer  from "./slices/post/postSlice";
import headerReducer from "./slices/header/headerSlice"
import userProjectReducer from "./slices/userProject/userProjectSlice";
import favouriteReducer from "./slices/favourite/favouriteSlice";
import userReducer from "./slices/user/userSlice";
import loginReducer from "./slices/auth/loginSlice"

export const store = configureStore({
  reducer:{
    post: postReducer,
    newsSlice: newsSlice,
    header: headerReducer,
    project:projectReducer,
    userProject:userProjectReducer,
    favourite:favouriteReducer,
    user:userReducer,
    login:loginReducer,
  },
});