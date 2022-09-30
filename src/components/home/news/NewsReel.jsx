import React from "react";
import news from "../../../api/news";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNews1 } from "../../../redux/slices/sliceNews/newsActions";
import { useEffect } from "react";

export default function NewsReel() {
  const dispatch = useDispatch();
  const newNews = useSelector((state) => state.newsSlice);

  useEffect(() => {
    dispatch(getNews1());
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-4 ml-16 mr-16">
        {newNews.news.map((e) => (
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
