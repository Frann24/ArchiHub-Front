import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../../redux/slices/user/userActions'

export default function Favourites() {
  const dispatch = useDispatch()
  const userLogeado = JSON.parse(localStorage.getItem("token"))
  
  useEffect(() => {
    dispatch(getUser(userLogeado.userId))
  }, [dispatch])
  const user = useSelector(state => state.user.user)
  let postsFav = user.favourites
  console.log(userLogeado)

  postsFav = postsFav.map((post) => {
    return (
      {
        id: post._id,
        title: post.title.toUpperCase(),
        createdAt: post.createdAt, 
        image: post.image,
      }
      )
    })
    const [state, setState] = useState(postsFav)
    const [cambio, setCambio] = useState(false)
    
    useEffect(() => { 
      console.log(postsFav)
    }, [cambio])

  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = postsFav.filter(posts => posts.title.toLowerCase().includes(e.target.value.toLowerCase()))
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
      postsFav.length ? state.length && state.map((post) => {
        return (
          <Link to={`/postDetail/${post.id}`}>
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
