import React from "react";
// import NewsReel from "./news/NewsReel";
import Paginado from "./news/Paginado";
import CarouselNews from "./news/CarouselNews";



function Home(newsPerPage,
  newsFilter,
  paginado,
  currentPage) {


  return (
    <div>
      <div className="object-fill: fill">
        <img
          src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664395439/news/Screen_Shot_2022-09-28_at_16.59.36_cfhqzs.png"
          alt="imagen"
          // width="900px"
          class="object-cover my-8 mt-16"
        />
      </div>
      <CarouselNews />


    </div>
  );
}

export default Home;
