import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/user/userActions";
import FormEditProfile from "./FormEditProfile";
import Post from "./Post";
import Projects from "./Projects";
import { getAllPosts } from "../../redux/slices/post/postActions";
import Favourites from "./Favourites";
import Reviews from "./Reviews";
import { getAllReviews } from "../../redux/slices/review/reviewActions";

export default function DashBoardUser() {
  const dispatch = useDispatch();
  const userLogeado = JSON.parse(localStorage.getItem("token"));
  const user = useSelector((state) => state.user.user);
  const [state, setState] = useState("projects");
  const [profile, setProfile] = useState(false);
  console.log("user: ", user);

  const user1 = useSelector((state) => state.user.user);

  useEffect(() => {

    dispatch(getUser(userLogeado.userId))
    dispatch(getAllPosts())
    dispatch(getAllReviews())
  }, [dispatch])

  function handleChange(e) {
    setState(e.target.value);
  }
  function handleEditProfile(e) {
    profile ? setProfile(false) : setProfile(true);
  }

  console.log("userAvatar:", user.avatar);
  console.log("user:", user);

  return (
    <div className="w-1/2 mx-auto mt-6">
      <div className="flex flex-wrap mb-12 w-full">
        <div className="mt-6 ml-12 grid grid-cols-1 sm:grid-cols-2 sm:gap-12 md:gap-20 ">
          <img
            src={`${user.avatar}`}
            width="200px"
            className="rounded-full mt-16"
          />

          <div>
            <div className="font-bold text-lg capitalize mt-12 ">
              {user.name} {user.lastname}
            </div>
            <div className="text-lg">{user.nickname} </div>
            <div>{user.description}</div>
            {user.description ? (
              <div>{user.description}</div>
            ) : (
              <div className="text-slate-200">Description</div>
            )}

            {user.location ? (
              <div>{user.location}</div>
            ) : (
              <div className="text-slate-200">Location</div>
            )}
            {user.job ? (
              <div>{user.job}</div>
            ) : (
              <div className="text-slate-200">Job Title</div>
            )}
            {user.page ? (
              <div>{user.page}</div>
            ) : (
              <div className="text-slate-200">Webpage</div>
            )}

            <div className="mt-20">
              <button
                onClick={(e) => handleEditProfile(e)}
                className="bg-slate-300 cursor-pointer w-32 h-8"
              >
                Edit Profile
              </button>
            </div>
            {profile && (
              <div>
                <FormEditProfile id={userLogeado.userId} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-10 mt-16 ml-12 w-1/2">
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
      </div>
      <div>
        {state === "projects" && (
          <div>
            <Projects id={userLogeado.userId} />
          </div>
        )}
        {state === "posts" && (
          <div>
            <Post
              id={userLogeado.userId}
              key={userLogeado.userId}
              user={user}
            />
          </div>
        )}
        {state === "reviews" && (
          <div>
            <Reviews id={userLogeado.userId} />
          </div>
        )}
        {state === "favourites" && (
          <div>
            <Favourites />
          </div>
        )}
      </div>
    </div>
  );
}
