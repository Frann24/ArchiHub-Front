import React, {useState, useEffect} from 'react'
import BtnMenu from '../btnMenu/BtnMenu'
import { logOutUser } from "../../../redux/slices/auth/loginActions"
import { useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function Logged({username, avatar}) {


  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleLogout =  (e) => {
    dispatch(logOutUser())
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className='text-lg flex gap-12 items-center'>
      <p>Hello! {username}</p>
       <img src={avatar} alt="avatar"/> 
      <BtnMenu />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logged