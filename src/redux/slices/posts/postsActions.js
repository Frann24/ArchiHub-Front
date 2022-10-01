import { getPosts, detailPost } from "./slicePosts";
const axios = require("axios");


export function getAllPosts () {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/post");
      console.log(json)
      return dispatch(getPosts(json.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetailPost (id) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`http://localhost:3001/post/${id}`);
        return dispatch(detailPost(json.data));
      } catch (error) {
        console.log(error);
      }
    };
}

export function savePost () {
    return async function (dispatch) {
      try {
        var json = await axios.get("http://localhost:3001/post/save");
        return dispatch(getPosts(json.data));
      } catch (error) {
        console.log(error);
      }
    };
  }