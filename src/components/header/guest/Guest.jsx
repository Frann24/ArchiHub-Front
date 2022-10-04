import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowSingIn, changeShowSingUp } from "../../../redux/slices/header/headerActions";
import Modal from "../../modal/Modal";
import SigIn from "../../signIn/SigIn";
import SignUp from "../../signUp/SignUp";
import BtnMenu from "../btnMenu/BtnMenu";
import Logged from "../logged/Logged";

function Guest() {
  const {modalSignIn, modalSignUp} = useSelector(state => state.header)
  // const token = window.localStorage.getItem("token")
  const dispatch = useDispatch()

  const toggleSignIn = (e) => {
    e.preventDefault()
    dispatch(changeShowSingIn(!modalSignIn))
  }
  const toggleSignUp = (e) => {
    e.preventDefault()
    dispatch(changeShowSingUp(!modalSignUp))
  }


  return (
    <div>
      <ul className="xl:text-base flex gap-16 items-center">
        <div className="hidden text-base
        sm:block 
        xl:text-xl xl:font-normal
        ">
          <li onClick={toggleSignIn} className="inline relative group cursor-pointer">
            <span>Sign in</span>
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <div className="border border-gray-900 py-1 inline m-2 "></div>
          <li onClick={toggleSignUp} className="inline relative group cursor-pointer">
            <span>Sign up</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </div>
        
      </ul>
      <Modal active={modalSignIn} toggle={toggleSignIn}>
        <SigIn/>
      </Modal>
      <Modal active={modalSignUp} toggle={toggleSignUp}>
        <SignUp/>
      </Modal>
    </div>
  );
}

export default Guest;
