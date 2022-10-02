import {createSlice} from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        user:{},
        loggedUser:{}
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload
            state.loggedUser =action.payload
        },
        logout:(state, action)=>{
            state.user = null
        },
        register:(state, action)=>{
            state.user = action.payload
        }
    }
})

export const {login,logout, register}= loginSlice.actions;

export default loginSlice.reducer