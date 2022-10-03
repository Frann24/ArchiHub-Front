import React from 'react'
import BtnMenu from '../btnMenu/BtnMenu'
import { logOutUser } from "../../../redux/slices/auth/loginActions"
import { useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"
// import useLocalStorage from "../hooks/useLocalStorage"

function Logged() {


  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const google = JSON.parse(localStorage.getItem("google"))


  const handleLogout =  (e) => {
    dispatch(logOutUser())
    localStorage.removeItem("user")
    localStorage.removeItem("google")
    navigate("/")
  }

  return (
    <div className='text-lg flex gap-12 items-center'>
      <p>Hello! {user ? user.username : google? google.given_name.split(" ").shift(): ""}</p>
       <img  src={user? user.userImg  : google? google.picture: ""} alt="avatar" width={"50px"}/> 
      <BtnMenu />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logged