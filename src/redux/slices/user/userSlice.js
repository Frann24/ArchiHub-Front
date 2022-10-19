import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    user: [],
    response: {},
    queryUsers: [],
    orderUsers:[],
    viewUser:[]
  },
  reducers: {
    allUsers: (state, { payload }) => {
      state.allUsers = payload;
      state.queryUsers = payload
      state.orderUsers = payload
    },
    showUser: (state, { payload }) => {
      state.user = payload;
    },
    responseUser: (state, { payload }) => {
      state.response = payload;
    },
    order: (state, { payload }) => {
      state.orderUsers = payload;
    },
    queryUser: (state,{payload}) => {
      state.queryUsers = payload
    },
    showUserProfile:(state,{payload})=>{
      state.viewUser = payload
    }
  },
});

export const { allUsers, showUser, responseUser,order, queryUser, showUserProfile } = userSlice.actions;

export default userSlice.reducer;
