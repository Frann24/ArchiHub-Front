import { allUsers, showUser, responseUser } from "./postSlice";
const axios = require("axios");

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/user")
      .then((info) => dispatch(allUsers(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/user/${id}`)
      .then((info) => dispatch(showUser(info.data)))
      .catch((err) => console.log(err));
  };
};

export const createUser = (id, info) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/api/user/${id}`, info)
      .then((res) => dispatch(responseUser(res.data)))
      .catch((err) => console.log(err));
  };
};

export const updateUser = (id, info) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/user/${id}`, info)
      .then((res) => dispatch(responseUser(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/api/user/${id}`)
      .then((res) => dispatch(responseUser(res.data)))
      .catch((err) => console.log(err));
  };
};
