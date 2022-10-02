import React from 'react'
import BtnMenu from '../btnMenu/BtnMenu'
import { logOutUser } from "../../../redux/slices/auth/loginActions"
import { useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"

function Logged() {


  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))


  const handleLogout =  (e) => {
    dispatch(logOutUser())
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className='text-lg flex gap-12 items-center'>
      <p>Hello! {user? user.username : ""}</p>
       <img  src={user? user.userImg  : ""} alt="avatar" width={"50px"}/> 
      <BtnMenu />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logged