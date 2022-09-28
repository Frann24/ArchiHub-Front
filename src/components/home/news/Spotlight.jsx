import React from "react";
// import { useParams } from "react-router-dom";
import news from "../../../api/news";
import NewsReel from "./NewsReel";

export default function spotlight() {
  // const params = useParams();
  // const dispatch= useDispatch
  const spotlight = news[0];

  console.log("spotlight: ", spotlight);

  return (
    <div>
      <div>
        <h3>Spotlight</h3>
        <img src={spotlight.image} width="300px" alt="news" />
        <div>{spotlight.title}</div>

        <div>{spotlight.date}</div>
        <div>{spotlight.shortDescription}</div>
      </div>
      <div>
        newsReels:
        <NewsReel newsId={spotlight.id} />
      </div>
    </div>
  );
}
