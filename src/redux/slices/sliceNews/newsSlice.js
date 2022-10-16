import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    detail: {},
    queryNews:[]
  },
  reducers: {
    getNews: (state, action) => {
      state.news = action.payload;
      state.queryNews=action.payload;
    },
    queryNews: (state, action) => {
      state.queryNews = action.payload;
    },
  },
});

export const { getNews, queryNews } = newsSlice.actions;
export default newsSlice.reducer;
