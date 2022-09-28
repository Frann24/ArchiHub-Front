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
      <div className="grid grid-cols-2">
        <div>
          <img src={spotlight.image} width="800px" alt="news" />
        </div>
        <div>
          <h3>COMPONENTE NEWS</h3>

          <div>{spotlight.title}</div>

          <div>{spotlight.date}</div>
          <div>{spotlight.description}</div>
        </div>
      </div>
      <div>
        newsReels:
        <NewsReel newsId={spotlight.id} />
      </div>
    </div>
  );
}
