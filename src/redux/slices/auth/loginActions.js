import axios from "axios";
import { AUTH_SIGNUP, AUTH_LOGIN } from "../constants";
import { login, logout, register } from "./loginSlice";


export const logUser=(credentials)=>(dispatch)=>{
    axios.post(AUTH_LOGIN, credentials)
    .then(res=> console.log(res)/* dispatch(login(res.data)) */)
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload.token)))
    .catch(e=>{
        console.log(e.response.data)
        window.localStorage.setItem("token", null)
    });
}

export const logOutUser=()=>(dispatch)=>{
    const token = window.localStorage.getItem("token")
    if(token){
        dispatch(logout(window.localStorage.removeItem("token")
        ))
    }
}

export const registerUser=(credentials)=>(dispatch)=>{
    axios.post(AUTH_SIGNUP, credentials)
    .then(res=>dispatch(register(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload.token)))
    .catch(e=>{
        console.log(e.response.data)
        window.localStorage.setItem("token", "")
    });
}
                
 