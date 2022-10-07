import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPostDetail } from "../../../redux/slices/post/ordenAndFilterActions";
import { getPost } from "../../../redux/slices/post/postActions";
import Loader from "../../loader/Loader";
import FavouritePost from "./favouritePost/FavouritePost";
import CreateReview from "./reviewPost/createReview/CreateReview";
import ReviewsReel from "./reviewPost/ReviewsReel";

function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postDetail = useSelector((state) => state.post.post);

  console.log("postDetail: ", postDetail);

  useEffect(() => {
    dispatch(getPost(id));
    return () => {
      dispatch(clearPostDetail());
    };
  }, [dispatch]);

  return (
    // <div className="place-self-center mt-40">
    // <div className="justify-content: center ">
    <div className="mx-64">
      <div className="w-full mx-auto ">
        {postDetail.length === 0 ? (
          <Loader />
        ) : (
          <div className="w-full  mx-auto">
            {postDetail.image[0] ? (
              <div className="bg-gray-50">
                <img
                  className="w-full max-h-[30vw] object-scale-down"
                  src={postDetail.image[0]}
                  alt=""
                />
              </div>
            ) : (
              <img
                src="https://res.cloudinary.com/dfcd64nhm/image/upload/v1664674482/Arquihub/4e36ead625b16bac653d2b07c7a57005_if3usp.png "
                width="210"
                alt=""
              />
            )}
            <div>
              <div className="w-full flex justify-start pt-2 overflow-hidden">
                {postDetail.image.map((img) => {
                  return (
                    <img
                      className="w-1/4 max-h-[7vw] object-cover"
                      src={img}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-between py-4">
                <div className="font-semibold text-transform: uppercase text-2xl ">
                  {postDetail.title}
                </div>
                <div>

                  <FavouritePost />
                </div>
              </div>

              {postDetail.created_by_data.length > 0 ? (
                <div className="font-light max-w-prose py-2">
                  Created By: {postDetail.created_by_data[0].name}{" "}
                  {postDetail.created_by_data[0].lastname}
                </div>
              ) : (
                <div></div>
              )}
              <div className="mb-6 flex gap-4">
                <span>Collaborators: </span>
                <div className="flex gap-4">
                  {postDetail.authors.map((el, i) => {
                    return (
                      <p key={i} className="">
                        {el.name} {el.lastname}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-0 mb-4">
              <div className="mx-2">{postDetail.mts2} m2</div>
              <div className="mx-2">{postDetail.rooms} rooms</div>
              <div className="mx-2">{postDetail.bathrooms} bathrooms</div>
              <div className="mx-2"> {postDetail.year}</div>
            </div>
            <div className="w-full mx-auto">
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
            <CreateReview />
            <ReviewsReel />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
