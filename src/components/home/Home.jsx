import React from "react";
import NewsReelBACKUP from "./news/NewsReelBACKUP";
import PostsReel from "./posts/PostsReel";
import Carousel from "./carousel/Carousel";
import Search from "../header/menu/search/Search";

function Home() {
  return (
    <div>
      <div id="home_id" className="w-full  lg:hidden">
        <Search />
      </div>
      <Carousel />
      <div
        className="m-4
    md:mx-8
    lg:mx-16
    xl:mx-32
    2xl:mx-64"
      >
        <div>
          <PostsReel />
        </div>
        <div>
          <NewsReelBACKUP />
        </div>
      </div>
    </div>
  );
}

export default Home;
