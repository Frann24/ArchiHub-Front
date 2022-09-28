import React from "react";

function CarouselLandingPageData({ arch, quotes, description, img, constructionName }) {
  return (
    <div className="flex flex-row w-full mt-8 ">
      <div className="w-5/12 flex flex-col justify-center ">
        <p className="text-7xl w-4/6 text-gray-700">{quotes}
          <span className=" block w-full text-end pt-8 text-2xl font-bold text-gray-800">
          {arch}
        </span>
        </p>
        
      </div>
      <div className="w-7/12 ml-auto">
        <img
          className="w-full"
          src={img}
          alt={`${constructionName}`}
        />
        <p className="m-auto py-2 text-xl">
          <span className="font-bold">{constructionName}</span>
          {description}
        </p>
      </div>
    </div>
  );
}

export default CarouselLandingPageData;
