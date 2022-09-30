import { configureStore } from "@reduxjs/toolkit";
// import newsSlice from "./slices/sliceNews/newsSlice";
import news from "./slices/sliceNews/newsSlice";
import newsSlice from "./slices/sliceNews/newsSlice"
// import Slice1Reducer from './slices/slices1'
import headerReducer from "./slices/header/headerSlice"

export default configureStore({
  reducer: {
    // slice1: Slice1Reducer,
    newsSlice: newsSlice,
    header: headerReducer,
  },
});


