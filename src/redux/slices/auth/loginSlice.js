import {createSlice} from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        user:{},
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload
        },
        logout:(state, action)=>{
            state.user = null
        },
        register:(state, action)=>{
            state.user = action.payload
        },
        googleLog:(state, action)=>{
            state.user = action.payload
        },
        clearLogin:(state,{payload})=>{
            state.user = payload
        }
    }
})

export const {login,logout, register, googleLog, clearLogin}= loginSlice.actions;

// export const selectUser = (state)=> state.user.user

export default loginSlice.reducer