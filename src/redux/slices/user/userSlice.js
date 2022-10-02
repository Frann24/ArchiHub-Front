import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    user: [],
    response: {},
  },
  reducers: {
    allUsers: (state, { payload }) => {
      state.allUsers = payload;
    },
    showUser: (state, { payload }) => {
      state.user = payload;
    },
    responseUser: (state, { payload }) => {
      state.response = payload;
    },
  },
});

export const { allUsers, showUser, responseUser } = userSlice.actions;

export default userSlice.reducer;
