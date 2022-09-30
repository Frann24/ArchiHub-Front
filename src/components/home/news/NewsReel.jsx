import React from "react";
import news from "../../../api/news";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import { useState } from "react";

export default function NewsReel() {
  // const params = useParams()
  // const dispatch= useDispatch
  // const reel = news.filter((e) => e.id !== newsId);




  return (
    <div>

    <div className="grid grid-cols-4 ml-16 mr-16">
      {currentNews.map((e) => (
        <Link to={`/newsDetail/${e.id}`}>
          <div>
            <img src={e.image} width="600px" alt="news" />
            <div>{e.date}</div>
            <p className="font-[5100]">{e.title}</p>
            <div className="font-weight:200">{e.shortDescription}</div>
          </div>
        </Link>
      ))}

    </div>
</div>
  );
}
