import { responseFavourite } from "./postSlice";
const axios = require("axios");

export const updateFavourite = (post_id, user_id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/favourite/${post_id}`, user_id)
      .then((res) => dispatch(responseFavourite(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteFavourite = (post_id,user_id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/api/favourite/${post_id}`,user_id)
      .then((res) => dispatch(responseFavourite(res.data)))
      .catch((err) => console.log(err));
  };
};
