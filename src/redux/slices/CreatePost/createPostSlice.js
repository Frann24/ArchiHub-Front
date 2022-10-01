import {createSlice} from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
  },
  reducers:{
    createPost : (state, {payload}) =>{
      state.post = payload
    }
  }
})

export const {createPost} = postSlice.actions

export default postSlice.reducer