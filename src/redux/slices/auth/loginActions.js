import axios from "axios";
import { login, logout, register, loggedUser } from "./loginSlice";
const baseUrl= "http://localhost:3001/api/auth/login"

export const logUser=(email, password)=>(dispatch)=>{
    const user = { email , password, loggedIn:true}
   return axios.post(baseUrl, user)
    .then(res=>dispatch(login(res.data)))
    .then(data=> window.localStorage.setItem("user", JSON.stringify(data.payload)))
    .catch(e=>{
        console.log(e.response.data)
        window.localStorage.setItem("token", null)
    });
}

export const logOutUser=()=>(dispatch)=>{
    const token = window.localStorage.getItem("token")
    if(token){
        dispatch(logout(window.localStorage.setItem("token", "")
        ))
    }
}

export const registerUser=(nickname ,email,password)=>(dispatch)=>{
    const user = { nickname, email, password, type : "user"}
   return axios.post("http://localhost:3001/api/auth/signup", user)
    .then(res=>dispatch(register(res.data)))
    .then(res=>console.log("registered!"))
    .catch(e=> console.log(e.response.data));
}
                
