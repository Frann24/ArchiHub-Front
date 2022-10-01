import {createSlice} from '@reduxjs/toolkit'

export const getUsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers:{
    getUsers : (state, {payload}) =>{
      state.users = payload
    }
  }
})

export const {getUsers} = getUsersSlice.actions

export default getUsersSlice.reducer