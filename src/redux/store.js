import { configureStore } from "@reduxjs/toolkit";

import Slice1Reducer from "./slices/slices1"
import headerReducer from "./slices/header/headerSlice"

export const store = configureStore({
  reducer:{
    slice1: Slice1Reducer,
    header: headerReducer,
  }
  
})