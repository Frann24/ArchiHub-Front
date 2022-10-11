import { faEllipsisVertical, faStar as solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getReview } from "../../../../redux/slices/review/reviewActions";
import { getPost } from "../../../../redux/slices/post/postActions";
import Reviews from "../../../dashBoardUser/Reviews";

export default function ReviewsReel() {
  const { review } = useSelector((state) => state.review);
  const { response } = useSelector((state) => state.review);
  const { id } = useParams();
  const [report, setReport] = useState("")
  const copyReview = [...review]
  const reviewR = copyReview.reverse()
  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page; 
  const newsPaginado = reviewR.slice(0, indexLastCard); 
   function paginado() {
    setPage(page + 1);
  } 
  const getDate = (date) => {
    const format = date.createdAt.split('T',1)[0].split('-').reverse().join('/')
    return format
  }
  const openReport = (i) => {
    setReport(i)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost(id))
    dispatch(getReview(id,"post"))
  }, [dispatch,response]);
  if (review.length) {
    return (
      <div className="overflow-y-hidden">
        {newsPaginado.map((e,index) => {
          return (
            <div key={index} className=" rounded-md bg-gray-50 shadow-md p-2 my-4 pt-4 flex flex-col gap-1 overflow-y-hidden xl:p-4">
              <div className="w-full flex items-center justify-between">
                <div className="w-7 flex items-center gap-3">
                  <img className="rounded-full" src={e.user_id.avatar} alt="" />
                  <p>{e.user_id.nickname}</p>
                </div>
                
                <div onClick={()=> openReport(index)} className="text-gray-500 w-8 h-8 flex justify-center items-center cursor-pointer rounded-full lg:hover:bg-gray-200 lg:text-xl"><FontAwesomeIcon icon={faEllipsisVertical}/></div>
                  {report === index && 
                    <div className="absolute z-40 w-3/5 right-0 mt-20 mx-6 rounded-lg
                    sm:w-2/5
                    md:mx-10 md:w-2/6
                    lg:mx-16 lg:w-1/4
                    xl:mx-32 xl:w-2/12
                    2xl:mx-64 2xl:w-2/12
                    ">
                      <div className="w-full bg-white text-base p-2 shadow-md rounded-lg text-black ">
                        <p className="p-1 pl-2 cursor-pointer hover:text-gray-400">Flag as inappropriate</p> 
                      </div>                    
                    </div>
                  }
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <FontAwesomeIcon
                          className="text-gray-800 text-xs"
                          icon={ratingValue <= e.value ? solid : regular}
                        />
                      </label>
                    );
                  })}
                </div>
                <p className="text-sm text-gray-500">{getDate(e)}</p>
              </div>
              <p>{e.comment} </p>
            </div>
          );}
        )}
        {newsPaginado.length !== review.length && 
        <div
          className=" text-base my-9 font-semibold flex flex-row-reverse cursor-pointer"
          onClick={(e) => paginado(e)}
        >
          See more...
        </div>}
        {report !== ""  && <div onClick={() => setReport("")} className="overflow-y-hidden fixed z-20 top-0 left-0 w-screen h-screen"></div>}
      </div>)}
 else {
    return (
      <div className="w-full text-center p-12">
        <p className="text-gray-500 font-medium"> Be the first to leave a comment!</p>
      </div>
    );
  }
}
