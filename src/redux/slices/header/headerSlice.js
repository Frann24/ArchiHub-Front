import {createSlice} from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    menu: false,
  },
  reducers:{
    showMenu : (state, {payload}) =>{
      state.menu = payload
    }
  }
})

export const {showMenu} = headerSlice.actions

export default headerSlice.reducer