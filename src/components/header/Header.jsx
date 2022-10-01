import React, { useEffect } from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import {useSelector} from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";
import Logged from "./logged/Logged";
import axios from "axios"

function Header() {
  
  // const token:  ? JSON.parse(localStorage.getItem('user')!) : null;

  const [token, setToken]= useLocalStorage("token","")
  axios.defaults.baseURL = "http://localhost:3000"
  axios.defaults.headers.common = {"Authorization" : `x-access-token ${token}`}

 
  useEffect(()=>{
    
  },[token])

  const {menu} = useSelector(state => state.header)
  return (
    <div className="select-none">
      <div className="border-b-2 border-gray-200">
        <div className="mx-32 xl:h-20 flex justify-between items-center ">
          <Logo />
         {token  ? <Logged/> : <Guest/>}
        </div>
      </div>
      {menu ? <Menu/> : <></>}
      
    </div>
  );
}

export default Header;
