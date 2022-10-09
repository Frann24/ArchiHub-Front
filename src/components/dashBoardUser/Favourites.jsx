import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Favourites() {
  const user = useSelector(state => state.user.user)
  let postsFav = user.favourites
  const [state, setState] = useState(postsFav)
  let order = []
  const [cambio, setCambio] = useState(false)

  useEffect(() => { 
    console.log(postsFav)
  }, [cambio])

  postsFav = postsFav.map((post) => {
    return (
      {
        title: post.title.toUpperCase(),
        createdAt: post.createdAt, 
        image: post.image,
      }
      )
    })


  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = postsFav.filter(posts => posts.title.toLowerCase().includes(e.target.value.toLowerCase()))
    postsSearch.length ? setState(postsSearch) : setState('not found')
  }
  function handleOrderDate(e) {
    if (cambio == true) {
       order = state.sort((a, b) => {
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
      console.log(1, state)
      return
    }
    if (cambio == false) {
      order = state.sort((a, b) => { 
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
      console.log(2, state)
      return
    }
  }

  return (
    <div>
    {
     postsFav.length && 
     <div>
      <label>Search post... </label>
      <input
      type='text'
      onChange={(e) => handleSearch(e)}
      />
      <button onClick={(e) => handleOrderDate(e)}>Date</button>
    </div> 
    }
    {
      state === 'not found' ? 
      <div>
        <p>there are no matches with your search</p>
      </div> :
      state.length ? state.map((post) => {
        return (
          <Link>
          <div>
            <img src={post.image[0]}></img>
            <h3>{post.title}</h3>
            <p>{post.createdAt.slice(0, 10)}</p>
          </div>
          </Link>
        )
      }) :
      <div>
        <p>you don't have any saved post</p>
      </div>
    }
    </div>
  )
}
