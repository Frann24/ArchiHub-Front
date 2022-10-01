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
      <h4 class="ml-16 ">Posts</h4>
      <div className="grid grid-cols-3 ml-16  container mx-auto">
        {currentCards.map((post) => {
          return (
            <div>
              <img width="600px" src={post.images[0]} alt="foto" />
              <Link to={`/postDetail/${post.id}`}>
                <h4 className="font-bold ">{post.title}</h4>
              </Link>
              <p className="font-light">{post.shortDescription}</p>
            </div>
          );
        })}
      </div>
      <div class="ml-16 text-xl" onClick={(e) => paginado(e)}>
        See more...
      </div>
    </div>
  );
}

export default PostsReel;
