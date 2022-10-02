import React from "react";
import { useSelector } from "react-redux";
import Search from "../header/menu/search/Search";
import NewsReel from "./news/NewsReel";
import FilterType from "./posts/filterType/FilterType";
import Order from "./posts/order/Order";
import PostsReel from "./posts/PostsReel";

function Home() {
  const { queryPost } = useSelector((state) => state.post);
  const condition = queryPost.length ? true : false;

  return (
    <div>
      <Search />
      <div className={`${condition ? 'hidden' : 'block'}`}>
        <img
          src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664395439/news/Screen_Shot_2022-09-28_at_16.59.36_cfhqzs.png"
          alt="imagen"
          className="object-cover my-8 mt-16 shadow-lg"
        />
      </div>
      <div id="posts_id">
        <div className="flex flex-col gap-2 pb-4">
          <div className="mx-4">
            <FilterType />
          </div>
          <div className="mx-4">
            <Order />
          </div>
        </div>
        <PostsReel />
      </div>
      <div id="news_id">
        <NewsReel />
      </div>
    </div>
  );
}

export default Home;
