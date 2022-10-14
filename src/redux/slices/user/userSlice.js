import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    user: [],
    response: {},
    queryUsers: [],
  },
  reducers: {
    allUsers: (state, { payload }) => {
      state.allUsers = payload;
      state.queryUsers = payload
    },
    showUser: (state, { payload }) => {
      state.user = payload;
    },
    responseUser: (state, { payload }) => {
      state.response = payload;
    },
    queryUser: (state,{payload}) => {
      state.queryUsers = payload
    }
  },
});

export const { allUsers, showUser, responseUser, queryUser } = userSlice.actions;

export default userSlice.reducer;
