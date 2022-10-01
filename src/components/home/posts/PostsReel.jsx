import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/slices/posts/postsActions';

function PostsReel() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])


const allPosts = useSelector(state => state.posts.allPosts)
console.log(allPosts)
const [page, setPage] = useState(1)
const indexLastCard = 3 * page
const currentCards = allPosts.slice(0, indexLastCard)


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