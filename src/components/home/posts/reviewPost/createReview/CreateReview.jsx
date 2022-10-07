import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../../../../redux/slices/review/reviewActions";
import { changeShowSingIn} from '../../../../../redux/slices/header/headerActions';
import { getPost } from "../../../../../redux/slices/post/postActions";
export default function CreateReview() {
const token = JSON.parse(localStorage.getItem("token"))
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formReviews, setformReviews] = useState({
    post_id: id,
    value: 0,
    comment: "",

  });
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
    <div>
      <div>
      {token?<div><img src={token.userAvatar} alt="" />
        <p>{token.userName}</p>
      </div>:<div><img src={"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"} alt="" /></div>}
      </div>
      <div>
      <input
          type="number"
          onChange={(e) => handleChange(e)}
          name="value"
          value={formReviews.value}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="comment"
          value={formReviews.comment}
        />
      </div>
      <div>
      {token?<button onClick={handleClick}>comment</button>:<button onClick={toggleSignIn} >comment</button>}
       {/*  <button onClick={()=>user.length===0?handleClick():hola}>Comment</button> */}
      </div>
    </div>
  );
}
