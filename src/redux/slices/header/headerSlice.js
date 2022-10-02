import {createSlice} from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    menu: false,
    loggedUser: false
  },
  reducers:{
    showMenu : (state, {payload}) =>{
      state.menu = payload
    },
    isLogged: (state, action)=>{
      state.loggedUser = action.payload
    }
  }
})

export const {showMenu, isLogged} = headerSlice.actions

export default headerSlice.reducer