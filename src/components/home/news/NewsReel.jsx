import React from "react";
import news from "../../../api/news";
import { Link } from "react-router-dom";

export default function NewsReel({ newsId }) {
  // const params = useParams()
  // const dispatch= useDispatch
  const reel = news.filter((e) => e.id !== newsId);

  return (
    <div className="grid grid-cols-4 ml-16 mr-16">
      <Link to={`/newsDetail/${e.id}`}>
        {reel.map((e) => (
          <div>
            <img src={e.image} width="600px" alt="news" />
            <div>{e.date}</div>
            <p className="font-[5100]">{e.title}</p>
            <div className="font-weight:200">{e.shortDescription}</div>
          </div>
        ))}
      </Link>
    </div>
  );
}
