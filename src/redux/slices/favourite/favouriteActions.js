import { responseUserProject } from "./favouriteSlice";
const axios = require("axios");

export const updateProject = (project_id, user_id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/api/userproject/${project_id}`, user_id)
      .then((res) => dispatch(responseUserProject(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deleteProject = (project_id,user_id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/api/userproject/${project_id}`,user_id)
      .then((res) => dispatch(responseUserProject(res.data)))
      .catch((err) => console.log(err));
  };
};
