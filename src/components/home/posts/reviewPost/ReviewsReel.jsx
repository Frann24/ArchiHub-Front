import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../../../../redux/slices/review/reviewActions";
export default function ReviewsReel() {
  const { review } = useSelector((state) => state.review);
  const { response } = useSelector((state) => state.review);
  const { id } = useParams();
   const [page, setPage] = useState(1);
  const indexLastCard = 3 * page; 
  const newsPaginado = review.slice(0, indexLastCard); 
   function paginado() {
    setPage(page + 1);
  } 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReview(id,"post"))
  }, [dispatch,response]);
  if (review.length) {
    return (
      <div>
        {newsPaginado.map((e,index) => {
          return (
            <div key={index}>
              <p>{e.user_id.nickname}</p>
              <img src={e.user_id.avatar} alt="" />
              <p>{e.value}</p>
              <p>{e.comment} </p>
            </div>
          );}
        )}
        <div
          className="mr-8 text-xl my-9 font-semibold flex flex-row-reverse cursor-pointer"
          onClick={(e) => paginado(e)}
        >
          See more...
        </div>
      </div>)}
 else {
    return (
      <div>
        <div>no comments able</div>
      </div>
    );
  }
}
