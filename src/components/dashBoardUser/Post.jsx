import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../redux/slices/post/postActions";

export default function Post({ id, user }) {
  let allPosts = useSelector((state) => state.post.allPosts);
  // let postsUser = allPosts.filter((posts) => posts.created_by === id); //'63398bc729c58ed2a2d0ce83'
  let postsUser = user.posts;

  console.log("postsUser", postsUser);
  console.log("allPosts:", allPosts);

  console.log("id", id);
  postsUser = postsUser.map((post) => {
    return {
      title: post.title.toUpperCase(),
      description: post.description,
      createdAt: post.createdAt,
      image: post.image[0],
    };
  });
  const [state, setState] = useState(postsUser);
  console.log("state: ", state);
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    console.log(cambio);
  }, [cambio]);
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
      });
      setCambio(false);
      setState(order);
      console.log(1, state);
      return;
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
      });
      setCambio(true);
      setState(order);
      console.log(2, state);
      return;
    }
  }

  return (
    <div>
      {postsUser.length ? (
        <div>
          <label>Search post... </label>
          <input type="text" onChange={(e) => handleSearch(e)} />
          <button onClick={(e) => handleOrderDate(e)}>Date</button>
        </div>
      ) : (
        <div></div>
      )}
      <Link to={"createpost"}>
        <button>New</button>
      </Link>
      {state === "not found" ? (
        <div>
          <p>there are no matches with your search</p>
        </div>
      ) : state.length ? (
        <div>
          {postsUser.length &&
            state.map((post) => {
              return (
                <div>
                  <img src={post.image} className="w-20"/>
                  <p>{post.createdAt.slice(0, 10)}</p>
                  <h3>{post.title}</h3>
                  <p>{post.description.slice(0, 70)}...</p>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          <p>you have no posts created</p>
        </div>
      )}
    </div>
  );
}
