import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/slices/post/postActions";
import { orderPosts } from "../../../redux/slices/post/ordenAndFilterActions";
import Loader from "../../loader/Loader";

function PostsReel() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post.orderPosts);
  const [loading, setLoading] = useState(true)
/*   const post = useSelector((state) => state.post.queryPost); */
/*   console.log(post);
  const condition = post.length ? true : false;
console.log(condition) */
  useEffect(() => {
    setLoading(true)
    dispatch(getAllPosts());
    setLoading(false)
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page;
  const currentCards =posts.slice(0, indexLastCard) /* condition
    ? post.slice(0, indexLastCard)
    : posts.slice(0, indexLastCard);
 */
  function paginado() {
    setPage(page + 1);
  }
  // const shortDescription = posts.description.slice(0, 50)
  if(loading) return (
    <div className="w-full">
      <h4 id="posts_id" className="ml-6 mb-6 font-semibold ">Posts</h4>
      <div className="flex justify-center items-center h-44"><Loader/></div>
    </div>
  )
  return (
    <div>
      <h4 id="posts_id" className="ml-6 mb-6 font-semibold ">Posts</h4>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
          {currentCards.length > 0 ? (
            currentCards.map((post, i) => {
              return (
                <div key={i}>
                  <Link to={`/postDetail/${post._id}`}>
                    <img
                      width="600px"
                      src={post.image[0]}
                      alt="foto"
                      className="w-full aspect-[3/2]"
                    />
                    <h4 className="font-bold text-transform: uppercase mt-6">
                      {post.title}
                    </h4>
                    <p className=" font-light truncate">{post.description}...</p>
                  </Link >
                </div>
              );
            })
          ) : (
            <p className="text-xl">No posts found!</p>
          )}
        </div>
      </div>
      <div
        className="mr-8 text-xl my-9 font-semibold flex flex-row-reverse cursor-pointer"
        onClick={(e) => paginado(e)}
      >
        See more...
      </div>
    </div>
  );
}

export default PostsReel;
