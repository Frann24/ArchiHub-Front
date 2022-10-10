import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Post({id}) {
  let allPosts = useSelector(state => state.post.allPosts)
  let postsUser = allPosts.filter(posts => posts.created_by === id)

  postsUser = postsUser.map((post) => {
    return (
      { 
        id: post._id,
        title: post.title.toUpperCase(),
        description: post.description,
        createdAt: post.createdAt, 
        image: post.image[0],
      }
      )
    })

  const [state, setState] = useState(postsUser)
  const [cambio, setCambio] = useState(false)

  useEffect(() => { 
    console.log(cambio)
  }, [cambio])
    
  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = postsUser.filter((posts) =>
      posts.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    postsSearch.length ? setState(postsSearch) : setState("not found");
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
      {postsUser.length ? (
        <div>
          <label>Search post... </label>
          <input type="text" onChange={(e) => handleSearch(e)} />
          <button onClick={(e) => handleOrderDate(e)}>Date</button>
          </div> ) : 
          <div></div>
        }
          <Link to={'/createpost'}>
            <button>New</button>
          </Link>
        {
        state === 'not found' ? ( 
        <div>
          <p>there are no matches with your search</p>
        </div>
      ) : state.length ? (
        <div>
          {postsUser.length &&
            state.map((post) => {
              return (
                <Link to={`/postDetail/${post.id}`}>
                <div>
                  <img src={post.image} className="w-20"/>
                  <p>{post.createdAt.slice(0, 10)}</p>
                  <h3>{post.title}</h3>
                  <p>{post.description.slice(0, 70)}...</p>
                </div>
                </Link>
                )
            })
            }
          </div> )
         :
          <div>
            <p>you have no posts created</p>
          </div>
        }
    </div>
  );
}
