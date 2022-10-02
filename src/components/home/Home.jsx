import React from "react";
import Search from "../header/menu/search/Search";
import NewsReel from "./news/NewsReel";
import PostsReel from "./posts/PostsReel";

function Home() {
  return (
    <div>
      <Search />
      <div className="object-fill: fill">
        <img
          src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664395439/news/Screen_Shot_2022-09-28_at_16.59.36_cfhqzs.png"
          alt="imagen"
          className="object-cover my-8 mt-16 shadow-lg"
        />
      </div>
      <div id="news_id">
      <NewsReel />
      </div>
      <div id="posts_id">
        <PostsReel />
      </div>
    </div>
  );
}

export default Home;
