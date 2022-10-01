import { allProjects, showProject, responseProject } from "./postSlice";
const axios = require("axios");
export const getAllProjects = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/project")
      .then((info) => dispatch(allProjects(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getProject = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/project/${id}`)
      .then((info) => dispatch(showProject(info.data)))
      .catch((err) => console.log(err));
  };
};

export const createProject = (id, info) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/api/project/${id}`, info)
      .then((res) => dispatch(responseProject(res.data)))
      .catch((err) => console.log(err));
  };
};

export const updateProject = (id, info) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/project/${id}`, info)
      .then((res) => dispatch(responseProject(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/api/project/${id}`)
      .then((res) => dispatch(responseProject(res.data)))
      .catch((err) => console.log(err));
  };
};
