import { createSlice } from "@reduxjs/toolkit";

export const reviewReportSlice = createSlice({
  name: "reviewreport",
  initialState: {
    allReviewReports: [],
    reviewReport: [],
    response: {},
  },
  reducers: {
    allReviewReports: (state, { payload }) => {
      state.allReviewReports = payload;
    },
    showReviewReport: (state, { payload }) => {
      state.reviewReport = payload;
    },
    responseReviewReport: (state, { payload }) => {
      state.response = payload;
    },
  },
});

export const { allReviewReports, showReviewReport, responseReviewReport } = reviewReportSlice.actions;

export default reviewReportSlice.reducer;
