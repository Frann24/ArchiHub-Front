import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPostDetail } from "../../../redux/slices/post/ordenAndFilterActions";
import { getPost } from "../../../redux/slices/post/postActions";
import Loader from "../../loader/Loader";
import FavouritePost from "./favouritePost/FavouritePost";
import Features from "./Features";
import CreateReview from "./reviewPost/createReview/CreateReview";
import ReviewsReel from "./reviewPost/ReviewsReel";
import CarrouselDetail  from "./CarrouselDetail";
function PostDetail() {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(false)
  const { id } = useParams();
  const postDetail = useSelector((state) => state.post.post);
  const date = new Date()
  const current_year = date.getFullYear()
  const current_month = date.getMonth()
  useEffect(() => {
    dispatch(getPost(id));
    return () => {
      dispatch(clearPostDetail());
    };
  }, [dispatch]);

  

  if(postDetail.length === 0) return <div className="w-full flex justify-center"><Loader/></div>
  const {image, title, created_by_data, description, bathrooms, mts2, rooms, year, authors} = postDetail
  let currentYear = Math.abs(year.split("-")[2] - current_year)
  if(currentYear === 1) currentYear+= " year ago"
  if(currentYear > 1) currentYear += " years ago"
  let currentMonth
  if(currentYear === 0) {
    currentMonth = Math.abs(year.split("-")[1] - current_month) 
    if(currentMonth > 1) currentMonth += " months ago"
    else{currentMonth += " month ago"}
  }
  
  return (
    <div className="mx-4 flex flex-col gap-4 overflow-x-hidden">
      <div className="flex flex-col gap-2">
        <div className=""><img className="w-full max-h-[90vw] object-scale-down" src={image[0]} alt="" /></div>
        <div className="flex flex-row w-1/2">{image.map((e,i) => i!== 0 && <img key={i} src={e} alt="" />)}</div>
      </div>
      <CarrouselDetail/>
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base">{`${created_by_data[0].name} ${created_by_data[0].lastname}`}</p>
        <div className="text-gray-500">
        <p className="text-sm text-">Collaborators: </p>
        <div className="text-sm pl-4">{authors.map((e,i) => <p className="py-0.5" key={i}>{`${e.name} ${e.lastname}`}</p>)}</div>
        </div>
      </div>
      <div className="text-end text-xl"><FavouritePost/></div>
      <div>
        <div className="flex gap-4 py-2  ">
        <p onClick={() => setDesc(false)} className={`text-xl font-medium border-b-2 border-white ${!desc && "border-gray-700"}`}>Features</p>
        <p onClick={() => setDesc(true)} className={`text-xl font-medium border-b-2 border-white ${desc && "border-gray-700"}`}>Description</p>
        </div>
        <div className="w-full bg-gray-100 p-2">
          {!desc 
          ? <Features bathrooms={bathrooms} mts2={mts2} rooms={rooms} date={currentYear === 0 ? currentMonth : currentYear}   /> 
          : <p  className="text-lg ">{description}</p>}
        </div>
      </div>
      <div className="pt-4">
        <p className="text-xl font-medium">Ratings and reviews</p>
        <ReviewsReel/>
      </div>
    </div>
  );
}

export default PostDetail;
