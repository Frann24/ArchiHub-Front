import React, { useState } from "react";
import Modal from "../../modal/Modal";
import SigIn from "../../signIn/SigIn";
import SignUp from "../../signUp/SignUp";
import BtnMenu from "../btnMenu/BtnMenu";
import Logged from "../logged/Logged";

function Guest() {
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  // const token = window.localStorage.getItem("token")

  const toggleSignIn = () => {
    setSignIn(!signIn)
  }
  const toggleSignUp = () => {
    setSignUp(!signUp)
  }

  return (
    <div>
      

      <ul className="text-lg flex gap-12 items-center">
        <div>
          <li onClick={toggleSignIn} className="inline relative group cursor-pointer">
            <span >Sign in</span>
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <div className="border border-gray-900 py-2 inline m-2 "></div>
          <li onClick={toggleSignUp} className="inline relative group cursor-pointer">
            <span>Register</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </div>
        <BtnMenu />
      </ul>
      <Modal active={signIn} toggle={toggleSignIn}>
        <SigIn/>
      </Modal>
      <Modal active={signUp} toggle={toggleSignUp}>
        <SignUp/>
      </Modal>
      


    </div>
  );
}

export default Guest;
