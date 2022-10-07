import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../../../../redux/slices/review/reviewActions";
import Modal from "../../../../modal/Modal";
import SigIn from "../../../../signIn/SigIn";
export default function CreateReview() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formReviews, setformReviews] = useState({
    post_id: id,
    title: "",
    comment: "",
  });
  const [signIn, setSignIn] = useState(false)
const handleSign =(e)=>{
  setSignIn(!signIn)
} 
  const handleChange = (e) => {
    setformReviews({ ...formReviews, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createReview({...formReviews,user_id:user._id}))
  };
  return (
    <div>
      <div>
        <img src={user.avatar} alt="" />
        {user.length!==0 && <p>{user.nickname}</p>}
        
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="title"
          value={formReviews.title}
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
      <Modal active={signIn} toggle={handleSign}>
      <SigIn/>
      </Modal>
      
      {user.length===0?<button onClick={handleSign} >comment sin user</button>:<button onClick={handleClick}>comment</button>}
       {/*  <button onClick={()=>user.length===0?handleClick():hola}>Comment</button> */}
      </div>
    </div>
  );
}
