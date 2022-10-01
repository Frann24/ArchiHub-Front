import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
    post: [],
    response: {},
  },
  reducers: {
    allPosts: (state, { payload }) => {
      state.allPosts = payload;
    },
    showPost: (state, { payload }) => {
      state.post = payload;
    },
    responsePost: (state, { payload }) => {
      state.response = payload;
    },
  },
});

export const { allPosts, post, responsePost } = postSlice.actions;

export default postSlice.reducer;
