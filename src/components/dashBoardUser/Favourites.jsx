import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/slices/user/userActions";

export default function Favourites() {
  /*   const dispatch = useDispatch(); */
  /*   const userLogeado = JSON.parse(localStorage.getItem("token"));
   */
  /*   useEffect(() => {
    dispatch(getUser(userLogeado.userId));
  }, [dispatch]); */
  const user = useSelector((state) => state.user.viewUser);
  let postsFav = user.favourites;

  postsFav = postsFav.map((post) => {
    return {
      id: post._id,
      title: post.title.toUpperCase(),
      createdAt: post.createdAt,
      image: post.image,
    };
  });
  const [state, setState] = useState(postsFav);
  const [cambio, setCambio] = useState(true);

  useEffect(() => {
    console.log(postsFav);
  }, [cambio]);

  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = postsFav.filter((posts) =>
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
      {postsFav.length ? (
        <div className="flex flex-wrap gap-16 items-end ml-20 my-6">
          {/* <label>Search post... </label> */}
          <input
            className="border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Search post..."
            onChange={(e) => handleSearch(e)}
          />
          <button
            className="bg-slate-300  px-3 py-1 text-slate-900"
            onClick={(e) => handleOrderDate(e)}
          >
            order DATE
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col-3 gap-6">
        {
          // state === "not found" ? (
          //   <div>
          //     <p>there are no matches with your search</p>
          //   </div>
          // ) :

          postsFav.length ? (
            state.length &&
            state.map((post) => {
              return (
                <div className="">
                  <Link to={`/postDetail/${post.id}`}>
                    <div className="">
                      <img src={post.image[0]} width="250px"></img>
                      <div className="">
                        <h3>{post.title}</h3>
                        <p>{post.createdAt.slice(0, 10)}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div>
              <p>you don't have any saved post</p>
            </div>
          )
        }
      </div>
    </div>
  );
}
