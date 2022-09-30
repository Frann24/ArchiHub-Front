import React, { useState } from 'react'
import posts from "../../../api/posts";
import { Link } from 'react-router-dom'

function PostsReel() {
const [page, setPage] = useState(1)
const indexLastCard = 3 * page
const currentCards = posts.slice(0, indexLastCard)



function paginado () {
  setPage(page+1)
}

  return (
    <div>
      <h4>Posts</h4>
        {
        currentCards.map((post) => {
            return (
            <div>
                <img width='200px' height='200px' src={post.images[0]} alt='foto'/>
                <Link to={`/postDetail/${post.id}`}>
                <h4>{post.title}</h4>
                </Link>
                <p>{post.shortDescription}</p>
            </div>
            )
            }
        )
        }
      <button onClick={(e) => paginado(e)} >See more...</button>  
    </div>
  )
  
}

export default PostsReel