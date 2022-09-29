import React from "react";
import News from "./news/News";

function Home() {
  return (
    <div>
      <div className="object-fill: fill">
        <img
          src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664395439/news/Screen_Shot_2022-09-28_at_16.59.36_cfhqzs.png"
          alt="imagen"
          // width="900px"
          class="object-cover"
        />
      </div>
      <News />
    </div>
  );
}

export default Home;
