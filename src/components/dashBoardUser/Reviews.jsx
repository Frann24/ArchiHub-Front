import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Reviews({ id }) {
  const allReviews = useSelector((state) => state.review.allReviews);
  let userReviews = allReviews.filter((rev) => rev.user._id == id);
  userReviews = userReviews.map((rev) => {
    return {
      postId: rev.post_id,
      title: rev.post[0].title,
      comment: rev.comment,
      createdAt: rev.createdAt,
      image: rev.post[0].image[0],
    };
  });
  const [state, setState] = useState(userReviews);
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    setState(userReviews);
  }, [cambio]);

  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = userReviews.filter((posts) =>
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
      return;
    }
  }

  return (
    <div>
      {userReviews.length ? (
        <div className="flex flex-wrap gap-16 items-end ml-20 my-6">
          {/* <label>Search post... </label> */}
          <input className="border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" 
          placeholder= "Search post..." onChange={(e) => handleSearch(e)} />
          <button className="bg-slate-300  px-3 py-1 text-slate-900" onClick={(e) => handleOrderDate(e)}>order DATE</button>
        </div>
      ) : (
        <div></div>
      )}
      {state === "not found" ? (
        <div>
          <p>there are no matches with your search</p>
        </div>
      ) : userReviews.length ? (
        
        state.length &&
        state.map((rev) => {
          // <div className="flex flex-col-3">
          
          return (
            <Link to={`/postDetail/${rev.postId}`}>
              <div className="">

              <div className="flex flex-col-2 gap-6 my-6">
                <img src={rev.image} width="250px" />
                <div>
                  <div className="text-base font-semibold">{rev.title}</div>
                <p className="text-base  text-slate-300">
                  {rev.createdAt.slice(0, 10)}
                </p>
                <p className="text-base ">{rev.comment}</p>
                  </div>
              </div>
              </div>
            </Link>
          );
        // </div>
        })
      ) 
      
      
      : (
        <div>
          <p>you don't have any reviews</p>
        </div>
      )}
    </div>
  );
}
