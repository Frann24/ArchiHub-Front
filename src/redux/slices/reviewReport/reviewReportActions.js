import { REVIEWREPORT } from "../constants";
import { allReviewReports, responseReviewReport } from "./reviewReportSlice"
const axios = require("axios");

export const getAllReviewReports = () => {
  return (dispatch) => {
    axios
      .get(REVIEWREPORT)
      .then((info) => dispatch(allReviewReports(info.data)))
      .catch((err) => console.log(err));
  };
};

/* export const getReview = (id,mood) => {
  return (dispatch) => {
    axios
      .get(`${REVIEW}/${id}/${mood}`)
      .then((info) => dispatch(showReviewReport(info.data)))
      .catch((err) => console.log(err));
  };
}; */

export const createReviewReport = (info) => {
  return (dispatch) => {
    axios
      .post(REVIEWREPORT, info)
      .then((res) => dispatch(responseReviewReport(res.data)))
      .catch((err) => console.log(err));
  };
};

export const updateReviewReport = (id, info) => {
  return (dispatch) => {
    axios
      .put(`${REVIEWREPORT}/${id}`, info)
      .then((res) => dispatch(responseReviewReport(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteReviewReport = (id) => {
  return (dispatch) => {
    axios
      .delete(`${REVIEWREPORT}/${id}`)
      .then((res) => dispatch(responseReviewReport(res.data)))
      .catch((err) => console.log(err));
  };
};
