import { configureStore } from "@reduxjs/toolkit";
// import newsSlice from "./slices/sliceNews/newsSlice";
import news from "./slices/sliceNews/newsSlice";
import newsSlice from "./slices/sliceNews/newsSlice"
// import Slice1Reducer from './slices/slices1'
import  postReducer  from "./slices/post/postSlice";
import headerReducer from "./slices/header/headerSlice"

export const store = configureStore({
  reducer:{
    post: postReducer,
    // slice1: Slice1Reducer,
    newsSlice: newsSlice,
    header: headerReducer,
  },
});


