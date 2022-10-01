import { allPosts, post, responsePost } from "./postSlice";
const axios = require("axios");
export const getAllPosts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/post")
      .then((info) => dispatch(allPosts(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getPost = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/post/${id}`)
      .then((info) => dispatch(post(info.data)))
      .catch((err) => console.log(err));
  };
};

export const createPost = (info) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/api/post`, info)
      .then((res) => dispatch(responsePost(res.data)))
      .catch((err) => console.log(err));
  };
};

export const updatePost = (id, info) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/post/${id}`, info)
      .then((res) => dispatch(responsePost(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/api/post/${id}`)
      .then((res) => dispatch(response(res.data)))
      .catch((err) => console.log(err));
  };
};
