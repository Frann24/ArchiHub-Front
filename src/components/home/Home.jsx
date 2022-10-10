import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../header/menu/search/Search";
import NewsReel from "./news/NewsReel";
import FilterType from "./posts/filterType/FilterType";
import Order from "./posts/order/Order";
import PostsReel from "./posts/PostsReel";
import { getAllUsers } from "../../redux/slices/user/userActions";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import Loader from "../loader/Loader";
import Carousel from "./carousel/Carousel";



function Home() {
  const { queryPost } = useSelector((state) => state.post);
  const condition = queryPost ? true : false;
  
  return (
    <div>
      <div id="home_id"></div>
        <Carousel/>
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
