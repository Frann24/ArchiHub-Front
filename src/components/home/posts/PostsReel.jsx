import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/slices/post/postActions";

function PostsReel() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.allPosts)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page;
  const currentCards = posts.slice(0, indexLastCard);

  function paginado() {
    setPage(page + 1);
  }
  // const shortDescription = posts.description.slice(0, 50)

  
console.log(posts);
  return (
    <div>

      <h4 class="ml-6 mb-6 font-semibold ">Posts</h4>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
          {currentCards.map((post) => {
            return (
              <div>
                <img
                  width="600px"
                  src={post.image[0]}
                  alt="foto"
                  className="w-full aspect-[3/2]"
                />
                <Link to={`/postDetail/${post._id}`}>
                  <h4 className="font-bold text-transform: uppercase mt-6">
                    {post.title}
                  </h4>
                </Link>
                    <p className="font-light truncate">{post.description}...</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        class="mr-8 text-xl my-9 font-semibold flex flex-row-reverse"
        onClick={(e) => paginado(e)}
      >
        {" "}
        See more...
      </div>
    </div>
  );
}

export default PostsReel;
