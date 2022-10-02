import React, { useEffect } from "react";
import Logo from "./logo/Logo";
import Guest from "./guest/Guest";
import Menu from "./menu/Menu";
import {useSelector} from "react-redux"
import Logged from "./logged/Logged";
import Search from "./menu/search/Search";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import PostDetail from "../home/posts/PostDetail";
import CreatePost from "../createPost/CreatePost";
import NewsDetail from "../home/news/NewsDetail";

function Header() {
  
  let token = window.localStorage.getItem("token")
  let auth = false;
 

  const {menu} = useSelector(state => state.header)
  return (
    <div className="select-none">
      <div className="border-b-2 border-gray-200">
        <div className="flex justify-between m-4 items-center h-14
        md:mx-8
        lg:mx-16 lg:h-16
        xl:mx-32
        ">
          <Logo />
         {token !== null ? <Logged/> : <Guest/>}
        </div>
      </div>
      {menu ? <Menu/> : <></>}
      <Search/>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="newsDetail/:id" element={<NewsDetail />} />
        <Route path="postDetail/:id" element={<PostDetail />} />
        <Route path="createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default Header;
