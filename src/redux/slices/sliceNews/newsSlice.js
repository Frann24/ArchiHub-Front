import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    detail: {},
  },
  reducers: {
    getNews: (state, action) => {
      state.news = action.payload;
    },
    getNewsById: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getNews, getNewsById } = newsSlice.actions;
export default newsSlice.reducer;
