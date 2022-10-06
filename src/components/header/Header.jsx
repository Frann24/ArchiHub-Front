import React, { useEffect } from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import { useSelector } from "react-redux";
import Logged from "./logged/Logged";
import Search from "./menu/search/Search";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../home/Home";
import PostDetail from "../home/posts/PostDetail";
import CreatePost from "../createPost/CreatePost";
import NewsDetail from "../home/news/NewsDetail";
import DashBoardAdmin from "../dashBoardAdmin/DashBoardAdmin";
import ProjectDetail from "../home/projects/ProjectDetail";
import CreateProject from "../home/projects/forms/CreateProject";


function Header() {
  const { pathname } = useLocation();

  let token = window.localStorage.getItem("token");
  let auth = false;

  const { menu } = useSelector((state) => state.header);
  return (
    <div className="select-none">
      <div className="">
        <div
          className="flex justify-between m-4 items-center h-14
        md:mx-8
        lg:mx-16 lg:h-16
        xl:mx-32
        "
        >
          <Logo />
          {token !== null ? <Logged /> : <Guest />}
        </div>
      </div>
      <div className="bg-gray-100 bg-opacity-50">
        {menu ? <Menu path={pathname} /> : <></>}
      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="newsDetail/:id" element={<NewsDetail />} />
        <Route path="postDetail/:id" element={<PostDetail />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="createproject" element={<CreateProject />} />

        <Route path="/admin" element={<DashBoardAdmin />} />

        <Route path="projectDetail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default Header;
