import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NotFound.css"

function NotFound () {
    const navigate = useNavigate()
    const handleReturn = ()=>{
        navigate("/home")
    }

  return (
    <div className='errorDiv'>
        <h1 className='errorTitle'>Sorry, we can´t find the page you are looking for</h1>
        <img className='errorImg' src='https://www.kindpng.com/picc/m/46-463914_under-construction-png-transparent-png.png' alt="site"/>
        <button className='errorBtn' onClick={handleReturn}>
        Return to Homepage ⮌
        </button>
    </div>
  )
}



export default NotFound