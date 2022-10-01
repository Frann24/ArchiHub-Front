import axios from "axios";
import { login, logout, register } from "./loginSlice";
const baseUrl= "http://localhost:3001/api/auth/login"

export const logUser=(credentials)=>(dispatch)=>{
    axios.post(baseUrl, credentials)
    .then(res=>dispatch(login(res.data)))
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
    axios.post("http://localhost:3001/api/auth/signup", credentials)
    .then(res=>dispatch(register(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload.token)))
    .catch(e=>{
        console.log(e.response.data)
        window.localStorage.setItem("token", "")
    });
}
                
 