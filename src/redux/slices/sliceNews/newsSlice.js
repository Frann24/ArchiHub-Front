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
  },
});

export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;
