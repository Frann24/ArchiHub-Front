import React, { useState } from "react";
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
/* import Navbar from "./navbar/Navbar"; */
import BtnMenu from "./btnMenu/BtnMenu";
import Footer from "../footer/Footer";
import DashBoardAdmin from "../dashBoardAdmin/DashBoardAdmin";
import ProjectDetail from "../home/projects/ProjectDetail";

function Header() {
  const { pathname } = useLocation();
  const token = window.localStorage.getItem("token");

  let auth = true;

  const { menu } = useSelector((state) => state.header);
  return (
    <div className="select-none ">
      <div className="sticky bg-white w-full top-0 shadow-md z-10">
        <div className="flex justify-between m-4 items-center h-16
        md:mx-8
        lg:mx-16 lg:h-16
        xl:mx-32 xl:h-20
        2xl:h-24
        ">
          <div className="text-2xl lg:text-3xl">
            <Logo />
          </div>
          <div className="lg:hidden">           
            {auth ? <Logged/> : <BtnMenu />}
          </div>
          <div className="hidden lg:flex gap-16 items-center pt-1">
          {/*   <Navbar path={pathname}/> */}
            {/* {token === null ? <Logged /> : <Guest />} */}
            {auth ? <Logged/> : <Guest/>}
          </div>
        </div>
        <div className="bg-gray-100 bg-opacity-50 lg:hidden">
          {menu ? <Menu path={pathname} /> : <></>}
        </div>
      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="newsDetail/:id" element={<NewsDetail />} />
        <Route path="postDetail/:id" element={<PostDetail />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="/admin" element={<DashBoardAdmin />} />
        <Route path="projectDetail/:id" element={<ProjectDetail />} />
      </Routes>
      <div className="bottom-0">
        <Footer/>
      </div>
    </div>
  );
}

export default Header;
