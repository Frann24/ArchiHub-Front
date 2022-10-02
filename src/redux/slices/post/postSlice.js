import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
    filterType: [],
    orderPosts: [],
    post: [],
    response: {},
  },
  reducers: {
    allPosts: (state, { payload }) => {
      state.allPosts = payload;
      state.filterType = payload;
      state.orderPosts = payload;
    },
    showPost: (state, { payload }) => {
      state.post = payload;
    },
    responsePost: (state, { payload }) => {
      state.response = payload;
    },
    filterType: (state, { payload }) => {
      state.filterType = payload;
    },
    order: (state, { payload }) => {
      state.orderPosts = payload;
    },
  },
});

export const { allPosts, showPost, responsePost, order, filterType } =
  postSlice.actions;

export default postSlice.reducer;
