import { configureStore } from "@reduxjs/toolkit";
import news from "./slices/sliceNews/newsSlice";

// import Slice1Reducer from './slices/slices1'

export default configureStore({
  reducer: {
    // slice1: Slice1Reducer,
    newsSlice: newsSlice,
  },
});
