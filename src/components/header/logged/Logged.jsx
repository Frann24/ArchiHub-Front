import React, {useState} from 'react'
import BtnMenu from '../btnMenu/BtnMenu'
import { logOutUser } from "../../../redux/slices/auth/loginActions"
import { useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"

function Logged() {
  const userName = "Franco"


  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleLogout =  (e) => {
    // e.preventDefault();
    dispatch(logOutUser())
    navigate("/")
  }

  return (
    <div className='text-lg flex gap-12 items-center'>
      <p>Hello! {userName}</p>
      <BtnMenu />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logged