import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
export default function ReviewsReel() {
  const { post } = useSelector((state) => state.post);
  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page;
  const newsPaginado = useRef([]);
  function paginado() {
    setPage(page + 1);
  }
  useEffect(() => {
    if (post.length !== 0) {
      newsPaginado.current = post.reviews.slice(0, indexLastCard);
    }
  }, [post]);

  if (post.length !== 0 && post.reviews.length) {
    return (
      <div>
        {newsPaginado.current.map((e) => {
          return (
            <div key={e._id}>
              <p>{e.user_data[0].nickname}</p>
              <img src={e.user_data[0].avatar} alt="" />
              <p>{e.title}</p>
              <p>{e.comment} </p>
            </div>
          );
        })}
        <div
          className="mr-8 text-xl my-9 font-semibold flex flex-row-reverse cursor-pointer"
          onClick={(e) => paginado(e)}
        >
          See more...
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>no comments able</div>
      </div>
    );
  }
}
