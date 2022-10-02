import React, { useEffect } from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import Logged from "./logged/Logged";
import {getUser} from "../../redux/slices/user/userActions"
function Header() {
    

  
  const dispatch = useDispatch()
  let {menu} = useSelector(state => state.header)
  const user = localStorage.getItem("user")
  const formattedUser = (JSON.parse(user))
  const {token, avatar, username} = formattedUser

  

  return (
    <div className="select-none">
      <div className="border-b-2 border-gray-200">
        <div className="flex justify-between m-4 items-center h-14
        md:mx-8
        lg:mx-16 lg:h-16
        xl:mx-32
        ">
          <Logo />
         {token  ? <Logged username={username} avatar={avatar}/> : <Guest/>}
        </div>
      </div>
      {menu ? <Menu/> : <></>}
      
    </div>
  );
}

export default Header;
