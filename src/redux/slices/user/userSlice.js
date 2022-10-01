import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState:{
        userDetail:{},
        users:[],
        allUsers:[]
    },
    reducers:{
        getUser:(state,action)=>{
            state.userDetail = action.payload
        },
        getAllUsers:(state, action)=>{
            state.users = action.payload
            state.allUsers= action.payload
        }
    }
})

export const {getUser,getAllUsers}= userSlice.actions;

// export const selectUser = (state)=> state.user.user

export default userSlice.reducer