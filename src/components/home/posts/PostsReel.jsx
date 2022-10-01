import React, { useState } from "react";
import posts from "../../../api/posts";
import { Link } from "react-router-dom";

function PostsReel() {
  const [page, setPage] = useState(1);
  const indexLastCard = 3 * page;
  const currentCards = posts.slice(0, indexLastCard);

  function paginado() {
    setPage(page + 1);
  }

  return (
    <div>

      <h4 class="ml-6 mb-6 font-semibold ">Posts</h4>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-9">
          {currentCards.map((post) => {
            return (
              <div>
                <img
                  width="600px"
                  src={post.images[0]}
                  alt="foto"
                  className="w-full aspect-[3/2]"
                />
                <Link to={`/postDetail/${post.id}`}>
                  <h4 className="font-bold text-transform: uppercase mt-6">
                    {post.title}
                  </h4>
                </Link>
                <p className="font-light truncate">{post.shortDescription}</p>
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
