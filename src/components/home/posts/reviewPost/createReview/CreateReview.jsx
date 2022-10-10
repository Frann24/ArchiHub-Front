import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../../../../redux/slices/review/reviewActions";
import { changeShowSingIn} from '../../../../../redux/slices/header/headerActions';
import { getPost } from "../../../../../redux/slices/post/postActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faStar as solid} from "@fortawesome/free-solid-svg-icons";
import  {faStar as regular} from '@fortawesome/free-regular-svg-icons';

export default function CreateReview() {
const token = JSON.parse(localStorage.getItem("token"))
const googleUser = JSON.parse(localStorage.getItem("googleUser"))
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formReviews, setformReviews] = useState({
    post_id: id,
    value: 0,
    comment: "",
  });
  const [hover, setHover] = useState(null)
  const {modalSignIn} = useSelector(state => state.header)
/* useEffect(() => {
  dispatch(getPost(id));
}, [])
 */
  const handleChange = (e) => {
    setformReviews({ ...formReviews, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createReview({...formReviews,user_id:token.userId}))
  };

  const toggleSignIn = (e) => {
    e.preventDefault()
    dispatch(changeShowSingIn(!modalSignIn))
  }
  
  return (
    <div className="bg-white mx-1 p-2 rounded-md shadow-lg lg:p-4">
      <div>
      {token
        ? <div className="flex items-center gap-2">
            <img className="w-8 rounded-full lg:w-9" src={token.userAvatar} alt="" />
            <p className="text-base text-gray-900 font-medium">{token.userName || googleUser.name}</p>
          </div>
        : <div className="">
            <img className="w-10 rounded-full" src={"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"} alt="" />
          </div>
      }
      </div>
      <div className="flex flex-col gap-2">
      <div className="pt-2">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                className="hidden"
                type="radio"
                value={formReviews.value}
                onClick={() => handleChange({target:{value:ratingValue, name:"value"}})}
              />
              <FontAwesomeIcon
                className="text-gray-800 text-base"
                icon={ratingValue<=(formReviews.value|| hover)?solid:regular}
                onMouseOver={() => setHover(ratingValue)} 
                onMouseOut={() => setHover(null)} 
              />
            </label>
          );
        })}
      </div>
        <div className="w-full flex flex-col gap-3 pb-4 md:flex-row">
          <input
            className={` bg-white border-b-2 border-gray-600 w-full py-1.5 px-2 focus:outline-none
            md:${formReviews.comment && "w-3/4"}
            `}
            type="text"
            onChange={(e) => handleChange(e)}
            name="comment"
            value={formReviews.comment}
            placeholder="Add your review..."
          />
          {formReviews.comment &&
            <button 
            className={`w-full p-1.5 bg-gray-800 text-gray-100 flex justify-center items-center gap-4
            md:w-1/4
            `}
            onClick={token ? handleClick : toggleSignIn}>
              <p>Send</p>
              <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
          }
        </div>
       {/*  <button onClick={()=>user.length===0?handleClick():hola}>Comment</button> */}
      </div>
    </div>
  );
}
