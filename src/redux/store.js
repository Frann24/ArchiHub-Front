import { configureStore } from "@reduxjs/toolkit";

import Slice1Reducer from './slices/slices1'

export const store = configureStore({
  reducer:{
    slice1: Slice1Reducer
  }
  
})