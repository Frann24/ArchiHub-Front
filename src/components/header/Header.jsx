import React, { useEffect } from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import { useSelector} from "react-redux";
import Logged from "./logged/Logged";

function Header() {
    
  
  let {menu} = useSelector(state => state.header)
  const user = JSON.parse(localStorage.getItem("user"))
 

  return (
    <div className="select-none">
      <div className="border-b-2 border-gray-200">
        <div className="flex justify-between m-4 items-center h-14
        md:mx-8
        lg:mx-16 lg:h-16
        xl:mx-32
        ">
          <Logo />
         {user  ? <Logged/> : <Guest/>}
        </div>
      </div>
      {menu ? <Menu/> : <></>}
      
    </div>
  );
}

export default Header;
