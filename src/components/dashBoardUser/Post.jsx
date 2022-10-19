import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Post({ id }) {
/*   let allPosts = useSelector((state) => state.post.allPosts);
  let postsUser = allPosts.filter((posts) => posts.created_by == id); */
  const user = useSelector((state) => state.user.viewUser);
/*   postsUser = postsUser.map((post) => {
    return {
      id: post._id,
      title: post.title.toUpperCase(),
      description: post.description,
      createdAt: post.createdAt,
      image: post.image[0],
    };
  }); */

  const [state, setState] = useState(user.posts);
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    console.log(cambio);
  }, [cambio]);

  function handleSearch(e) {
    e.preventDefault();
    const postsSearch = user.posts.filter((posts) =>
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
      {user.length ? (
        <div className="flex flex-wrap gap-16 items-end ml-20 my-6">
          {/* <label className="text-base">Search post... </label> */}
          <input className="border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" 
          placeholder= "Search post..."
          onChange={(e) => handleSearch(e)} />
          <button onClick={(e) => handleOrderDate(e)}>Date</button>
      <Link to={"/createpost"}>
        <button className="bg-green-600 text-white px-6 ">New</button>
      </Link>
        </div>
      ) : (
        <div></div>
      )}
      {state === "not found" ? (
        <div>
          
          <div className="box-content  h-72 p-7 mt-5 mb-12 bg-slate-100 flex flex-col justify-center items-center">
        
          <p className="text-slate-500 text-base ml-12">there are no matches with your search</p>
        </div>
        </div>
      ) : state.length ? (
        <div>
          {user.length!==0 &&
            state.map((post) => {
              return (
                <Link to={`/postDetail/${post._id}`}>
                  <div className="flex flex-col-2 gap-6 my-6">
                   { post.image.length ? <img src={post.image[0]} width="250px" />
                   : <img src="https://res.cloudinary.com/dfcd64nhm/image/upload/v1664674482/Arquihub/4e36ead625b16bac653d2b07c7a57005_if3usp.png" width="250px"/> }
                    <div>
                      <div className="text-slate-500 text-base ">{post.createdAt.slice(0, 10)}</div>
                    <div className=" text-base ">{post.title.toUpperCase()}</div>
                    <div className="text-slate-500 text-base ">{post.description.slice(0, 70)}...</div>
                      </div>
                  </div>
                </Link>
              );
            })}
        </div>
      ) : (
        <div className="box-content  h-72 p-7 mt-5 mb-12 bg-slate-100 flex flex-col justify-center items-center">
        
        <p className="text-slate-500 text-base ml-12">You have no posts created</p>
        <Link to={"/createpost"}>
            <button className="bg-green-600 text-white px-6 mt-6">New</button>
          </Link>
      </div>
      )}
    </div>
  );
}

