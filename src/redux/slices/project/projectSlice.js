import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    allProjects: [],
    project: [],
    response: {},
  },
  reducers: {
    allProjects: (state, { payload }) => {
      state.allProjects = payload;
    },
    showProject: (state, { payload }) => {
      state.project = payload;
    },
    responseProject: (state, { payload }) => {
      state.response = payload;
    },
  },
});

export const { allProjects, showProject, responseProject } = projectSlice.actions;

export default projectSlice.reducer;