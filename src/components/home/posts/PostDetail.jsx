import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPostDetail } from "../../../redux/slices/post/ordenAndFilterActions";
import { getPost } from "../../../redux/slices/post/postActions";
import FavouritePost from "./favouritePost/FavouritePost";
import CreateReview from "./reviewPost/createReview/CreateReview";
import ReviewsReel from "./reviewPost/ReviewsReel";

function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postDetail = useSelector((state) => state.post.post);
  const token = JSON.parse(localStorage.getItem("token"))
  console.log(token) 
  useEffect(() => {
    dispatch(getPost(id));
    return () => {
        dispatch(clearPostDetail());
      }
  }, [dispatch]);

  return (
    // <div className="place-self-center mt-40">
    // <div className="justify-content: center ">
    <div className="container mx-auto center mt-6">
      <div>
        {postDetail.length === 0 ? (
          <div></div>
        ) : (
          <div>
            <FavouritePost/>
            <img width="630px" alt="image" src={postDetail.image[0]}></img>
            <div>
              {/* <div className="w-full h-60"> */}
              {/* <div className="grid grid-col-3 ">
              </div> */}
              <div className="flex my-6">
                <img src={postDetail.image[1]} width="210" />
                <img src={postDetail.image[2]} width="210" />
                <img src={postDetail.image[4]} width="210" />
              </div>

              {/* <div className="flex flex-wrap mb-12">
                  {postDetail.image.map((img) => {
                    return <img width="200px" src={img}/>;
                  })}
                </div> */}
              {/* </div> */}
            </div>
            <div>
              <div className="font-semibold text-transform: uppercase ">
                Title: {postDetail.title}
              </div>
              <div className="font-light max-w-prose ">
                Created By: {postDetail.created_by_data[0].name}{" "}
                {postDetail.created_by_data[0].lastname}
              </div>
              <div className="mb-6">
                {" "}
                Authors:
                {postDetail.authors.map((el, index) => {
                  return (
                    <div key={index}>
                      <h3>
                        {el.name} {el.lastname}
                      </h3>
                    </div>
                  );
                })}{" "}
              </div>
            </div>
            <div className="grid grid-cols-9 gap-0 mb-4">
              <div className="mx-2">{postDetail.mts2} m2</div>
              <div className="mx-2">{postDetail.rooms} rooms</div>
              <div className="mx-2">{postDetail.bathrooms} bathrooms</div>
              <div className="mx-2"> {postDetail.year}</div>
            </div>
            <div>
              <div className="font-light max-w-prose mb-20 text-justify">
                {postDetail.description}
              </div>
            </div>
            {/* <div>
                  <img/>
                  <textarea
                  placeholder='add a comment'
                  onChange={(e) => handleComment(e)} />
                  <button 
                  //onClick={saveComment()}    
                  >Send</button>
              </div>
        <div>
                  {
                      post.comments.map((c) => {
                          <div>
                              <img src={c.image}/>
                              <h4>{c.userName}</h4>
                              <h4>{c.date}</h4>
                              <p>{c.comment}</p>
                          </div>
                      })
                  }
              </div> */}
          </div>
        )}
      </div>
    <CreateReview />
    <ReviewsReel/>      
    </div>
  );
  
}

export default PostDetail;
