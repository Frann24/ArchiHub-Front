import { USER_PROJECT } from "../constants";
import { responseUserProject } from "./userProjectSlice";
const axios = require("axios");

export const updateProject = (project_id, user_id) => {
  return (dispatch) => {
    axios
      .put(`${USER_PROJECT}/${project_id}`, user_id)
      .then((res) => dispatch(responseUserProject(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteProject = (project_id,user_id) => {
  return (dispatch) => {
    axios
      .delete(`${USER_PROJECT}/${project_id}`,user_id)
      .then((res) => dispatch(responseUserProject(res.data)))
      .catch((err) => console.log(err));
  };
};

