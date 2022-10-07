import axios from "axios";
import { AUTH_SIGNUP, AUTH_LOGIN, GOOGLE_LOGIN } from "../constants";
import { login, logout, register, googleLog, clearLogin } from "./loginSlice";


export const logUser=(email,password)=>(dispatch)=>{
    // axios.post(AUTH_LOGIN, credentials)
    // console.log(credentials);
    axios.post(AUTH_LOGIN, {email, password})
    .then(res=>dispatch(login(res.data)))
    .then(data => window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e=>{
        dispatch(login(e.response.data))
        window.localStorage.setItem("token", null)
    });
}

export const logOutUser=()=>(dispatch)=>{
    const token = window.localStorage.getItem("token")
    if(token){
        dispatch(logout(window.localStorage.removeItem("token", "google")
        ))
    }
}

export const registerUser=(name, lastname, nickname, email, password)=>(dispatch)=>{
    axios.post(AUTH_SIGNUP, {name, lastname, nickname, email, password})
    .then(res=>dispatch(register(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e => {
        dispatch(register(e.response.data))
        window.localStorage.setItem("token", null)})
}

export const googleLogin=(email, avatar, name, lastname)=>(dispatch)=>{
    // axios.post("http://localhost:3001/api/auth/google", email)
     axios.post(GOOGLE_LOGIN, {email:email, avatar: avatar, name: name, lastname: lastname})
    .then(res => dispatch(googleLog(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e=>console.log(e.response.data)
);
}

export const clearUser = (state) =>{
    return clearLogin(state)
}
                
 