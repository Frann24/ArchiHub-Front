import axios from "axios";
import { getAllUsers, getUser } from "./userSlice";
const baseUrl = "http://localhost:3001/api/user"



export const getUsers =() =>(dispatch)=>{
     axios.get(baseUrl)
     .then(res=> dispatch(res.data))
     .catch(e=>console.log(e))
}

export const getUserByEmail=(email)=>(dispatch)=>{
    axios.get(baseUrl)
    .then(res=>res.data)
    .then(users=> dispatch(users.find(u=> u.email === email)))
    .catch(e=>console.log(e))
}