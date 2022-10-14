import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    allProjects: [],
    project: [],
    response: {},
    queryProjects:[],
  },
  reducers: {
    allProjects: (state, { payload }) => {
      state.allProjects = payload;
      state.queryProjects=payload;
    },
    showProject: (state, { payload }) => {
      state.project = payload;
    },
    responseProject: (state, { payload }) => {
      state.response = payload;
    },
    queryProject:(state,{payload})=>{
      state.queryProjects=payload;
    }
  },
});

export const { allProjects, showProject, responseProject, queryProject } = projectSlice.actions;

export default projectSlice.reducer;
