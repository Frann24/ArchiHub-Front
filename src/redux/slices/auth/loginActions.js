import axios from "axios";
import { AUTH_SIGNUP, AUTH_LOGIN, GOOGLE_LOGIN } from "../constants";
import { login, logout, register, googleLog } from "./loginSlice";


export const logUser=(email,password)=>(dispatch)=>{
    // axios.post(AUTH_LOGIN, credentials)
    // console.log(credentials);
    axios.post(AUTH_LOGIN, {email, password})

    .then(res=>dispatch(login(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
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

export const registerUser=(name, lastname, nickname, email, password)=>(dispatch)=>{
    axios.post(AUTH_SIGNUP, {name, lastname, nickname, email, password})
    .then(res=>dispatch(register(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e=>console.log(e.response.data)
);
}

export const googleLogin=(email)=>(dispatch)=>{
    console.log(email);
    axios.post("http://localhost:3001/api/auth/google", email)
    // axios.post(GOOGLE_LOGIN, email)
    .then(res=>dispatch(googleLog(res.data)))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e=>console.log(e.response.data)
);
}
                
 