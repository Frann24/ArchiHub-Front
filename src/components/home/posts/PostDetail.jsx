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
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStarHalfStroke as half, faStar as solid } from "@fortawesome/free-solid-svg-icons";
import  {faStar as regular} from '@fortawesome/free-regular-svg-icons';
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
  const {image, title, created_by_data, description, bathrooms, mts2, rooms, year, authors, rating} = postDetail
  let currentYear = Math.abs(year.split("-")[2] - current_year)
  if(currentYear === 1) currentYear+= " Year ago"
  if(currentYear > 1) currentYear += " Years ago"
  let currentMonth
  if(currentYear === 0) {
    currentMonth = Math.abs(year.split("-")[1] - current_month) 
    if(currentMonth > 1) currentMonth += " Months ago"
    else{currentMonth += " Month ago"}
  }
  return (
    <div className="mx-4 flex flex-col gap-4 overflow-x-hidden select-text
    md:mx-8
    lg:mx-16
    xl:mx-32
    2xl:mx-64
    ">
      <div className="flex flex-col gap-2 ">
        <div className=""><img className="w-full min-h-[90vw] object-cover md:min-h-[75vw] lg:max-h-[70vw] lg:min-h-[70vw]  xl:max-h-[60] 2xl:min-h-[50vw] 2xl:max-h-[50vw]" src={image[0]} alt="" /></div>
        {/* <div className="flex flex-row w-1/2"> */}
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={image.length - 1}
        visibleSlides={2}
        infinite={true}
        hasMasterSpinner={image[image.length] ? true : false}
        className="flex flex-col"
        >
        <Slider className="max-h-[40vw] w-full md:max-h-[35vw] lg:max-h-[30vw] xl:max-h-[25vw] 2xl:max-h-[20vw] cursor-grab active:cursor-grabbing">
          {image.map((e,i) => i!== 0 && <Slide key={i} index={i}><img className="min-h-[40vw] object-cover md:min-h-[35vw] lg:min-h-[30vw] xl:min-h-[25vw]" src={e} alt="" /></Slide>)}
        </Slider>
        <ButtonBack className="absolute left-0 text-xl min-h-[40vw]  float-left text-gray-400  bg-black mx-4 bg-opacity-50 
        md:mx-8 md:min-h-[35vw] md:px-1
        lg:mx-16 lg:min-h-[30vw]
        xl:mx-32 xl:min-h-[25vw]
        2xl:mx-64 2xl:min-h-[20vw]
        ">
          <FontAwesomeIcon icon={faChevronLeft}/>
        </ButtonBack>
        <ButtonNext className="absolute right-0 text-xl min-h-[40vw] float-right text-gray-400  bg-black mx-4 bg-opacity-50 
        md:mx-8 md:min-h-[35vw] md:px-1
        lg:mx-16 lg:min-h-[30vw]
        xl:mx-32 xl:min-h-[25vw]
        2xl:mx-64 2xl:min-h-[20vw]
        ">
          <FontAwesomeIcon icon={faChevronRight}/>
        </ButtonNext>
      </CarouselProvider>
        {/* </div> */}
      </div>
      {/* <CarrouselDetail/> */}
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base">{`${created_by_data[0].name} ${created_by_data[0].lastname}`}</p>
        <div className="text-gray-500">
        <p className="text-sm text-">Collaborators: </p>
        <div className="text-sm pl-4">{authors.map((e,i) => <p className="py-0.5" key={i}>{`${e.name} ${e.lastname}`}</p>)}</div>
        </div>
      </div>
      <div>{[...Array(5)].map((star, i) => {
  const ratingValue = i + 1;
  return (

    <label>
      {console.log(Math.ceil(rating))}
      <FontAwesomeIcon
        className="star"
        icon={ratingValue<=Math.ceil(rating)?ratingValue===rating || ratingValue<=rating?solid:ratingValue-0.5<=rating?half:regular:regular}
        color="#ffc107"
      />
    </label>
  );
})}</div>
      <div className="text-end text-xl"><FavouritePost/></div>
      <div>
        <div className="flex gap-4 py-2 xl:hidden ">
        <p onClick={() => setDesc(false)} className={`text-xl font-medium border-b-2 border-white ${!desc && "border-gray-700"}`}>Features</p>
        <p onClick={() => setDesc(true)} className={`text-xl font-medium border-b-2 border-white ${desc && "border-gray-700"}`}>Description</p>
        </div>
        <div className="w-full bg-gray-100 p-2 shadow-lg lg:p-4 xl:hidden">
          {!desc 
          ? <Features bathrooms={bathrooms} mts2={mts2} rooms={rooms} date={currentYear === 0 ? currentMonth : currentYear}   /> 
          : <p  className="text-base leading-7 lg:text-lg">{description}</p>}
        </div>
        <div className="hidden xl:block">
          <p className="text-xl font-medium">Features</p>
          <div className="p-4">
            <Features bathrooms={bathrooms} mts2={mts2} rooms={rooms} date={currentYear === 0 ? currentMonth : currentYear}/>
          </div>
        </div>
        <div className="hidden xl:block mt-8">
          <p className="text-xl font-medium">Description</p>
          <div className="p-4">
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4 bg-white px-2">
        <p className="text-xl font-medium">Ratings and reviews</p>
        <CreateReview/>
        {/* <div>Aca van los filtros</div> */}
        <ReviewsReel/>
      </div>
      
    </div>
  );
}

export default PostDetail;
