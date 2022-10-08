import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../../../../redux/slices/review/reviewActions";
export default function ReviewsReel() {
  const { review } = useSelector((state) => state.review);
  const { response } = useSelector((state) => state.review);
  const { id } = useParams();
  const [report, setReport] = useState("")
  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page; 
  const newsPaginado = review.slice(0, indexLastCard); 
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
    dispatch(getReview(id,"post"))
  }, [dispatch,response]);
  if (review.length) {
    return (
      <div className="overflow-y-hidden">
        {newsPaginado.map((e,index) => {
          return (
            <div key={index} className="my-4 flex flex-col gap-2 overflow-y-hidden">
              <div className="w-full flex items-center justify-between">
                <div className="w-7 flex items-center gap-3">
                  <img className="rounded-full" src={e.user_id.avatar} alt="" />
                  <p>{e.user_id.name}</p>
                </div>
                
                <div onClick={()=> openReport(index)} className="text-gray-500 pl-4"><FontAwesomeIcon icon={faEllipsisVertical}/></div>
                  {report === index && 
                    <div className="absolute z-40 w-3/5 right-0 mt-24 mx-4">
                      <div className="w-full bg-gray-50 text-base p-2  shadow-md rounded-lg text-black">
                        <p className="p-1">Flag as inappropriate</p>
                        <p className="p-1">Mark as spam</p>  
                      </div>                    
                    </div>
                  }
              </div>
              <div className="flex gap-4">
                <p>{e.value}</p>
                <p className="text-sm text-gray-500">{getDate(e)}</p>
              </div>
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
        {report !== ""  && <div onClick={() => setReport("")} className="overflow-y-hidden fixed z-20 top-0 left-0 w-screen h-screen"></div>}
      </div>)}
 else {
    return (
      <div>
        <div>no comments able</div>
      </div>
    );
  }
}
