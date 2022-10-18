import React from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import { useSelector } from "react-redux";
import Logged from "./logged/Logged";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../home/Home";
import PostDetail from "../home/posts/PostDetail";
import CreatePost from "../createPost/CreatePost";
import NewsDetail from "../home/news/NewsDetail";
import BtnMenu from "./btnMenu/BtnMenu";
import Footer from "../footer/Footer";
import DashBoard from "../dashBoardAdmin/DashBoard";
import ProjectDetail from "../home/projects/ProjectDetail";
import Navbar from "./navbar/Navbar";
import { useEffect } from "react";
import { useRef } from "react";
import CreateProject from "../home/projects/forms/CreateProject";
import Payment from "../payment/payment";
import ForgotPassword from "../resetPassword/ForgotPassword";
import ResetPassword from "../resetPassword/ResetPassword";
import DashBoardUser from "../dashBoardUser/DashBoardUser"
import SearchContent from "../searchContent/SearchContent";
import CancelPayment from "../payment/CancelPayment"

function Header() {
  const { pathname } = useLocation();
  const token = window.localStorage.getItem("token");
  const googleUser = window.localStorage.getItem("googleUser");
  const { user } = useSelector(state => state.login)
  const isLoggin = token !== null && token !== "null" ? true : false || googleUser ? true : false || user.token ? true : false
  const condition = useRef(isLoggin)

  useEffect(()=>{
    condition.current = isLoggin
  },[isLoggin])

  const { menu } = useSelector((state) => state.header);
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="sticky bg-white w-full top-0 shadow-md z-10">
          <div className="flex justify-between m-4 items-center h-16
          md:mx-8
          lg:mx-16 lg:h-16
          xl:mx-32 xl:h-20
          2xl:mx-64 2xl:h-24
          ">
            <div className="text-2xl lg:text-3xl">
              <Logo />
            </div>
            <div className=" xl:hidden">           
              {token ? <Logged/> : <BtnMenu />}
            </div>
            <div className="hidden xl:flex gap-8 items-center pt-1">
              <Navbar path={pathname}/>
              {condition.current ? <Logged /> : <Guest />}
            </div>
          </div>
          <div className="bg-gray-100 bg-opacity-50 lg:hidden">
            {menu && <Menu path={pathname} />}
          </div>
        </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="newsDetail/:id" element={<NewsDetail />} />
          <Route path="postDetail/:id" element={<PostDetail />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="createproject" element={<CreateProject />} />
          <Route path="/admin" element={<DashBoard />} />
          <Route path="projectDetail/:id" element={<ProjectDetail />} />
          {/* <Route path="/dashuser" element={<DashUser />} /> */}
          <Route path="/user/:value" element={<DashBoardUser />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="forgotPassword" element={<ForgotPassword/>}/>
          <Route path="resetPassword/:id/:token" element={<ResetPassword/>}/>
          <Route path="search" element={<SearchContent/>}/>
          <Route path="/cancelSubscription" element={ <CancelPayment />} />
        </Routes>
      <div className="bottom-0">
        <Footer/>
      </div>
    </div>
    </div>
  );
}

export default Header;
