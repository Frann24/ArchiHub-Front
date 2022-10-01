import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNews1 } from "../../../redux/slices/sliceNews/newsActions";
import { Link } from "react-router-dom";

export default function NewsDetail(props) {
  const newNews = useSelector((state) => state.newsSlice.news);
  const params = useParams();
  const detail = newNews.length > 0 && newNews.filter((e) => e.id == params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews1());
  }, [dispatch]);

  console.log("params: ", params.id);
  console.log("typeof params: ", typeof params.id);
  console.log("detail: ", detail);
  console.log("newNews:", newNews);

  return (
    <div>
      <div>
        <div className="container mx-40 mt-40">
          <img src={detail[0].image} width="600px" alt="news" />
          <div className="text-gray-400 mt-6">{detail[0].date}</div>
          <p className="font-semibold text-transform: uppercase">
            {detail[0].title}
          </p>
          <div className="font-light max-w-prose">{detail[0].description}</div>
         
            <div className="font-light max-w-prose">{detail[0].url}</div>
            
        
        </div>
      </div>
    </div>
  );
}
