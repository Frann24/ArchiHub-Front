import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPostDetail } from "../../../redux/slices/post/ordenAndFilterActions";
import { getPost } from "../../../redux/slices/post/postActions";
import Loader from "../../loader/Loader";
import CarrouselDetail from "./CarrouselDetail";

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
    <div className=" w-1/2 mx-auto     mt-6">
      <div>
        {postDetail.length === 0 ? (
          <Loader />
        ) : (
          <div>
            {/* {postDetail.image[0] ? (
              <img src={postDetail.image[0]} width="630" />
            ) : (
              <img
                src="https://res.cloudinary.com/dfcd64nhm/image/upload/v1664674482/Arquihub/4e36ead625b16bac653d2b07c7a57005_if3usp.png "
                width="210"
              />
            )} */}
            <CarrouselDetail/>
            <div>
              {/* <div className="w-full h-60"> */}
              {/* <div className="grid grid-col-3 ">
              </div> */}

              {/* <div className="flex my-6">
                {postDetail.image[1] ? (
                  <img src={postDetail.image[1]} width="210" />
                ) : (
                  <div></div>
                )}
                {postDetail.image[2] ? (
                  <img src={postDetail.image[2]} width="210" />
                ) : (
                  <div></div>
                )}
                {postDetail.image[3] ? (
                  <img src={postDetail.image[3]} width="210" />
                ) : (
                  <div></div>
                )}
              </div> */}

              {/* <img src={postDetail.image[2]} width="210" />
                <img src={postDetail.image[4]} width="210" /> */}
              <div className="justify-center w-1/2">
                {/* <div className="flex   w-1/4 mb-12">
                  {postDetail.image.map((img) => {
                    return <img src={img} />;
                  })}
                </div> */}
              </div>
            </div>
            <div className=" ">
              <div className="font-semibold text-transform: uppercase ">
                Title: {postDetail.title}
              </div>
              {postDetail.created_by_data.length > 0 ? (
                <div className="font-light max-w-prose ">
                  Created By: {postDetail.created_by_data[0].name}{" "}
                  {postDetail.created_by_data[0].lastname}
                </div>
              ) : (
                <div></div>
              )}
              <div className="mb-6">
                {" "}
                Authors:
                {postDetail.authors.map((el) => {
                  return (
                    <div>
                      <h3>
                        {el.name} {el.lastname}
                      </h3>
                    </div>
                  );
                })}{" "}
              </div>
            </div>
            <div className="grid grid-cols-9 gap-9 mb-4">
              <div className="pl-9">{postDetail.mts2} m2</div>
              <div className="pl-9">{postDetail.rooms} rooms</div>
              <div className="pl-9">{postDetail.bathrooms} baths</div>
              <div className="pl-9"> {postDetail.year}</div>
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
    </div>
  );
}

export default PostDetail;
