import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const naviagete = useNavigate()

  const handleClick = (e,id) => {
    e.preventDefault()
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className='flex gap-8 text-'>
        <div className='menu-link' onClick={(e)=> handleClick(e,"#home_id")}><Link to="/home">Home</Link></div>
        <div className='menu-link' onClick={(e)=> handleClick(e,"#posts_id")}><Link to="/home">Posts</Link></div>
        <div className='menu-link' onClick={(e)=> handleClick(e,"#news_id")}><Link to="/home">News</Link></div>
        <div className='menu-link' ><Link to="/about-us">About us</Link></div>
    </div>
  )
}

export default Navbar