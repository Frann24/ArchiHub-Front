import React, { useEffect } from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import {useSelector} from "react-redux"
import Logged from "./logged/Logged";

function Header() {
  
  let token = window.localStorage.getItem("token")
  let auth = false;
 

  const {menu} = useSelector(state => state.header)
  return (
    <div className="select-none">
      <div className="border-b-2 border-gray-200">
        <div className="mx-32 h-28 flex justify-between items-center ">
          <Logo />
         {token !== null ? <Logged/> : <Guest/>}
        </div>
      </div>
      {menu ? <Menu/> : <></>}
      
    </div>
  );
}

export default Header;
