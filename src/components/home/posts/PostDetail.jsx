import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../../redux/slices/post/postActions";

function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postDetail = useSelector((state) => state.post.post);


  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch]);

  return (
    <div>
      <div className="container mx-40 mt-40">
        {postDetail.length === 0 ? (
          <div></div>
        ) : (
          <div>
            <img width="600px" alt="image" src={postDetail.image[0]}></img>
            <div>
              {/* <div className="w-full h-60"> */}
                {/* <div className="grid grid-col-3 ">
              </div> */}
<div className="flex my-6">
  <img src={postDetail.image[1]} width="200"/>
  <img src={postDetail.image[2]} width="200"/>
  <img src={postDetail.image[3]} width="200"/>
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
               <div className="mb-6"> Authors:
              {postDetail.authors.map((el) => {
                return (
                  <div>
                    <h3>
                      {el.name} {el.lastname}
                    </h3>
                  </div>
                );
              })} </div> 
            </div>
            <div className="grid grid-cols-9 gap-0">
              <div className="mx-4">{postDetail.mts2} m2</div>
              <div className="mx-4">{postDetail.rooms} rooms</div>
              <div className="mx-4">{postDetail.bathrooms} bathrooms</div>
              <div className="mx-4">Year: {postDetail.year}</div>
            </div>
            <div>
              <div className="font-light max-w-prose mb-6 text-justify">
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
