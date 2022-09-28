import React from "react";
import news from "../../../api/news";

export default function NewsReel({ newsId }) {
  // const params = useParams()
  // const dispatch= useDispatch
  const reel = news.filter((e) => e.id !== newsId);

  return (
    <div className="grid grid-cols-4">
      {reel.map((e) => (
        <div>
          <img src={e.image} width="300px" alt="news" />
          <div>{e.date}</div>
          <div>{e.title}</div>
          <div>{e.shortDescription}</div>
        </div>
      ))}
    </div>
  );
}
