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

  console.log(postDetail.authors);

  return (
    <div>
      {postDetail.length === 0 ? <div></div> : 
      <div>
        <img width="200px" height="200px" src={postDetail.image[0]}></img>
      <div>
        {
          postDetail.image.map((img) => {
            return <img width="50px" height="50px" src={img}></img>;
          })}
      </div>
      <div>
        <h2>{postDetail.title}</h2>
        <h3>{postDetail.created_by_data[0].name} {postDetail.created_by_data[0].lastname}</h3>
        {postDetail.authors.map((el) => {
          return (<div>
            <h3>{el.name}</h3>
            <h3>{el.lastname}</h3>
          </div>);
        })}
      </div>
        
        <div>
          <h4>{postDetail.mts2} m2</h4>
          <h4>{postDetail.rooms} rooms</h4>
          <h4>{postDetail.bathrooms} bathrooms</h4>
          <h4></h4>
          <h4></h4>
        </div>
        <div>
          <p>{postDetail.description}</p>
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
      </div>}
    </div>
  );
}

export default PostDetail;