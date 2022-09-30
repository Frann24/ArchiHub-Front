import React from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import {useSelector} from "react-redux"
import Logged from "./logged/Logged";

function Header() {
  const {menu} = useSelector(state => state.header)

  let auth = false;
  return (
    <div className="select-none">
      <div className="border-b-2 border-gray-200">
        <div className="mx-32 h-28 flex justify-between items-center ">
          <Logo />
          {auth ? <Logged/> : <Guest />}
        </div>
      </div>
      {menu ? <Menu/> : <></>}
      
    </div>
  );
}

export default Header;
