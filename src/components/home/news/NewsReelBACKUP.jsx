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
  /* console.log("newsPaginado: ", newsPaginado); */
  return (
    <div >
      <h4 className="mb-6 font-semibold font-size:26px">News</h4>
      <div className="container mx-auto margin-top: 16px">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
          {newsPaginado.map((e,index) => (
            <Link key={index} to={`/newsDetail/${e.id}`}>
              <div>
                {e.id === 2 ? (
                  <img
                    src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664405309/news/Screen_Shot_2022-09-28_at_19.44.45_zocf1r.png"
                    className="w-full aspect-[3/2]"
                    alt=""
                  />
                ) : (
                  <img
                    src={e.image}
                    width="600px"
                    alt="news"
                    className="w-full aspect-[3/2]"
                  />
                )}
                <div className="text-gray-400 mt-6">{e.date}</div>
                <p className="font-semibold truncate text-transform: uppercase ">
                  {e.title}
                </p>
                <div className="font-light truncate" >{e.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="mr-8 text-xl my-9 font-semibold flex flex-row-reverse cursor-pointer"
        onClick={(e) => paginado(e)}
      >
        See more...
      </div>
    </div>
  );
}
