import React from "react";
// import { useParams } from "react-router-dom";
import news from "../../../api/news";
import NewsReel from "./NewsReel";

export default function News() {
  // const params = useParams();
  // const dispatch= useDispatch
  const spotlight = news[0];

  console.log("spotlight: ", spotlight);

  return (
    <div>
      <div className="grid grid-cols-2 mb-8 ml-16 gap-1">
        <div>
          <img src={spotlight.image} width="800px" alt="news" />
        </div>
        <div className="ml-1 mr-16">
          <div>{spotlight.title}</div>
          <div>{spotlight.date}</div>
          <div>{spotlight.description}</div>
        </div>
      </div>
      <div >
        <NewsReel newsId={spotlight.id} />
      </div>
    </div>
  );
}
