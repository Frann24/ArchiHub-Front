import React from "react";
import news from "../../../api/news";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getNews1 } from "../../../redux/slices/sliceNews/newsActions";

export default function NewsReel() {
  const dispatch = useDispatch();
  const newNews = useSelector((state) => state.newsSlice);

  useEffect(() => {
    dispatch(getNews1());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page;
  const newsPaginado = newNews.news.slice(0, indexLastCard);
  function paginado() {
    setPage(page + 1);
  }
  console.log("newsPaginado: ", newsPaginado);
  return (
    <div>
      <div className="grid grid-cols-3 ml-16  container mx-auto">
        {newsPaginado.map((e) => (
          <Link to={`/newsDetail/${e.id}`}>
            <div className="pr-8">
              {e.id === 2 ? (
                <img src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664405309/news/Screen_Shot_2022-09-28_at_19.44.45_zocf1r.png" />
              ) : (
                <img src={e.image} width="600px" alt="news" />
              )}
              <div class="text-gray-400">{e.date}</div>
              <p className="font-normal">{e.title}</p>
              <div className="font-light">{e.shortDescription}</div>
            </div>
          </Link>
        ))}
      </div>
      <div class="ml-16 text-xl" onClick={(e) => paginado(e)}>
        See more...
      </div>
    </div>
  );
}
