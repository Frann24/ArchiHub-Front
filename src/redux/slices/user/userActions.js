import { USERS } from "../constants";
import { allUsers, showUser, responseUser } from "./userSlice";
const axios = require("axios");



export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(USERS)
      .then((info) => dispatch(allUsers(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getUser = (id) => {
  console.log('ivo')
  return (dispatch) => {
    axios
      .get(`${USERS}/${id}`)
      .then((info) => dispatch(showUser(info.data)))
      .catch((err) => console.log(err));
  };
};

export const createUser = (id, info) => {
  return (dispatch) => {
    axios
      .post(`${USERS}/${id}`, info)
      .then((res) => dispatch(responseUser(res.data)))
      .catch((err) => console.log(err));
  };
};

export const updateUser = (id, info) => {
  return (dispatch) => {
    axios
      .put(`${USERS}/${id}`, info)
      .then((res) => dispatch(responseUser(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`${USERS}/${id}`)
      .then((res) => dispatch(responseUser(res.data)))
      .catch((err) => console.log(err));
  };
};
