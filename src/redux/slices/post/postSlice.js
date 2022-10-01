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
    response: (state, { payload }) => {
      state.response = payload;
    },
  },
});

export const { allPosts, post, response } = postSlice.actions;

export default postSlice.reducer;
