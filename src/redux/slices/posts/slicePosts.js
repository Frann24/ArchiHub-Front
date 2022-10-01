import {createSlice} from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: "slicePost",
  initialState: {
    allPosts: [],
    postDetail: {},
  },
  reducers:{
    getPosts: (state, action) => {
      state.allPosts.push(action.payload)  
    },
    detailPost: (state, action) => {
      state.postDetail = action.payload  
    }
  }
})


export const { getPosts, detailPost } = postsSlice.actions
export default postsSlice.reducer