import React from "react";
import { useSelector } from "react-redux";
import Search from "../header/menu/search/Search";
import NewsReel from "./news/NewsReel";
import FilterType from "./posts/filterType/FilterType";
import Order from "./posts/order/Order";
import PostsReel from "./posts/PostsReel";

function Home() {
  const { queryPost } = useSelector((state) => state.post);
  const condition = queryPost ? true : false;

  return (
    <div>
      <div id="home_id"></div>
      <div className={`${queryPost.length ? 'block' : 'block'}`}>
        <img
          src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664395439/news/Screen_Shot_2022-09-28_at_16.59.36_cfhqzs.png"
          alt="imagen"
          className="object-cover my-8 shadow-lg"
        />
      </div>
        <Search />
      <div >
        <div className="flex flex-col gap-2 pb-4 w-full
        sm:flex-row
        xl:w-2/5 xl:mx-auto
        ">
          <div id="posts_id" className="mx-4 sm:w-1/2">
            <FilterType />
          </div>
          <div className="mx-4 sm:w-1/2">
            <Order />
          </div>
        </div>
        <PostsReel />
      </div>
      <div>
        <NewsReel />
      </div>
    </div>
  );
}

export default Home;
