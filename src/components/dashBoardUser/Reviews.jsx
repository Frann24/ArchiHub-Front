import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Reviews({id}) {
  const allReviews = useSelector(state => state.review.allReviews)
  let userReviews = allReviews.filter(rev => rev.user[0]._id == id)
  userReviews = userReviews.map((rev) => {
    return (
      {
        postId: rev.post_id,
        title: rev.post[0].title,
        comment: rev.comment,
        createdAt: rev.createdAt, 
        image: rev.post[0].image[0],
      }
      )
    })
    const [state, setState] = useState(userReviews)
    const [cambio, setCambio] = useState(false)

    useEffect(() => {
      setState(userReviews)
    }, [cambio])

    function handleSearch(e) {
    e.preventDefault();
    const postsSearch = userReviews.filter(posts => posts.title.toLowerCase().includes(e.target.value.toLowerCase()))
    postsSearch.length ? setState(postsSearch) : setState('not found')
  }

  function handleOrderDate(e) {
    if (cambio == true) {
      const order = state.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
            return 1;
        }
        if (a.createdAt < b.createdAt) {
            return -1;
        } 
          return 0;
      })
      setCambio(false)
      setState(order)
      return
    }
    if (cambio == false) {
      const order = state.sort((a, b) => { 
        if (a.createdAt > b.createdAt) {
            return -1;
        }
        if (a.createdAt < b.createdAt) {
            return 1;
        } 
          return 0;
      })
      setCambio(true)
      setState(order)
      return
    }
  }

  return (
    <div>
      {
      userReviews.length ? 
      <div>
        <label>Search post... </label>
        <input
        type='text'
        onChange={(e) => handleSearch(e)}
        />
        <button onClick={(e) => handleOrderDate(e)}>Date</button>
      </div> :
      <div></div>
      }
      {
        state === 'not found' ?
        <div>
          <p>there are no matches with your search</p>
        </div> :
        userReviews.length ? state.length && state.map((rev) => {
          return (
            <Link to={`/postDetail/${rev.postId}`}>
            <div>
              <img src={rev.image}/>
              <h4>{rev.title}</h4>
              <p>{rev.comment}</p>
              <p>{rev.createdAt.slice(0, 10)}</p>
            </div>
            </Link>
          )
        }) :
        <div>
        <p>you don't have any reviews</p>
      </div>
      }
    </div>
  )
}
