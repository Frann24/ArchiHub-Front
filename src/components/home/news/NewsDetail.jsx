import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import news from "../../../api/news";

export default function NewsDetail(props) {
  const params = useParams();
  const detail = news.filter((e) => e.id === params.id);
  //   const dispatch = useDispatch();
  //   const id = params.id;

  //   useEffect(() => {
  //     dispatch(getDetail(params.id));
  //     return () => {
  //       dispatch(cleanFilter());
  //     };
  //   }, [dispatch]);
  console.log(detail);
  return (
    <div>
      <div>
        <div>
          <img src={detail[0].image} width="600px" alt="news" />
          <div>{detail[0].date}</div>
          <p className="font-[5100]">{detail[0].title}</p>
          <div className="font-weight:200">{detail[0].description}</div>
        </div>
      </div>
    </div>
  );
}
