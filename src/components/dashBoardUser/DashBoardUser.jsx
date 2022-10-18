import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getViewUser } from "../../redux/slices/user/userActions";
import FormEditProfile from "./FormEditProfile";
import Post from "./Post";
import Projects from "./Projects";
import { getAllPosts } from "../../redux/slices/post/postActions";
import Favourites from "./Favourites";
import Reviews from "./Reviews";
import { getAllReviews } from "../../redux/slices/review/reviewActions";
import { Link, useParams } from "react-router-dom";
import Profile from "./Profile";


export default function DashBoardUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const userLogeado = JSON.parse(localStorage.getItem("token"));
  const [state, setState] = useState(id);
  const [profile, setProfile] = useState(false);
  const user = useSelector((state) => state.user.viewUser);
  
  useEffect(() => {
    dispatch(getViewUser(id))
    dispatch(getAllReviews());
    dispatch(getAllPosts());
  }, [dispatch, id]);
  console.log(user);
  // console.log(id);

  function handleChange(e) {
    setState(e.target.value);
  }
  function handleEditProfile(e) {
    profile ? setProfile(false) : setProfile(true);
  }

  return (
    <div className="ml-32">
      <div>
        <Link to={'/cancelSubscription'}>
         <button>Cancel Suscription</button>
        </Link>
      </div>
    <div className="mx-32">
      {/* <div className="w-1/2 mx-auto mt-6"> */}
      {profile ? (
        <div>
          <div>
            <FormEditProfile id={id} user={user} />
          </div>
        </div>
      ) : (
        <div className="">
          <div>
            <Profile
              state={state}
              user={user}
              handleChange={handleChange}
              handleEditProfile={handleEditProfile}
              // id={{ id: userLogeado.userId }}
              id={id}
            />
          </div>
        </div>
      )}
      <div>
        <div className="divide-x">
          <div className="flex flex-row gap-16 mt-16  w-1/2">
            <div className="tracking-wider text-lg hover:border-b-2 border-slate-300">
              <button value="projects" onClick={(e) => handleChange(e)}>
                Projects
              </button>
            </div>

            <div className="tracking-wider text-lg hover:border-b-2 border-slate-300">
              <button value="posts" onClick={(e) => handleChange(e)}>
                Posts
              </button>
            </div>

            <div className="tracking-wider text-lg border-b-2 border-white hover:border-b-2 hover:border-slate-300">
              <button value="reviews" onClick={(e) => handleChange(e)}>
                Reviews
              </button>
            </div>

            <div className="tracking-wider text-lg border-b-2 border-white hover:border-b-2 hover:border-slate-300">
              <button value="favourites" onClick={(e) => handleChange(e)}>
                Favourites
              </button>
            </div>
          </div>
          <hr className="mt-2" />
        </div>
        <div>
          {state === "projects" && (user.projects.length ? 
            <div>
              <Projects id={id} />
            </div>
            :
            <div className="box-content  h-72 p-7 mt-5 mb-12 bg-slate-100 flex flex-col justify-center items-center">
            <p className=" text-base">you have no projects created</p>
            <Link to={"/createproject"}>
              <button className="bg-green-600 text-white px-6 mt-6">New</button>
            </Link>
          </div>

          )}
          {state === "posts" && (
            <div>
              <Post
                id={id}
                key={id}
                user={user}
              />
            </div>
          )}
          {state === "reviews" && (
            <div>
              <Reviews />
            </div>
          )}
          {state === "favourites" && (
            <div>
              <Favourites />
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
