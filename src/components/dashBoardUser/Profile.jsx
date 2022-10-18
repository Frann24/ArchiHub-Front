import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Profile({
  user,
  userLogeado,
  handleChange,
  handleEditProfile,
  Favourites,
  Projects,
  Post,
  Reviews,
  state,
  id,
}) {
  return (
    <div className="ml-32">
      <div className="flex flex-col-2 mb-12 w-full gap-20">
        <div className="relative ">
          <img
            // src={`${user.avatar}`}
            src={user.avatar}
            width="240px"
            height="240px"
            className="rounded-full mt-16"
          />
        </div>
        <div className="">
          <div className="font-bold text-lg capitalize mt-12 ">
            {user.name} {user.lastname}
          </div>
          <div className="text-lg">{user.nickname} </div>

          {user.description ? (
            <div>{user.description}</div>
          ) : (
            <div className="text-slate-200">Description</div>
          )}

          {user.location ? (
            <div className="flex flex-row my-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>{user.location}</div>
            </div>
          ) : (
            <div className="flex flex-row my-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="text-slate-200">Location</div>
            </div>
          )}
          {user.job ? (
            <div className="flex flex-row my-3">
              <FontAwesomeIcon icon={faBuilding} />
              <div>{user.job}</div>
            </div>
          ) : (
            <div className="flex flex-row my-3">
              <FontAwesomeIcon icon={faBuilding} />
              <div className="text-slate-200">Job Title</div>
            </div>
          )}
          {user.page ? (
            <div>
              <div className="flex flex-wrap">
                <FontAwesomeIcon icon="fa-solid fa-link" />
              </div>
              <div>{user.page}</div>
            </div>
          ) : (
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faLink} />

              <div className="text-slate-200">Webpage</div>
            </div>
          )}
          <button
            onClick={(e) => handleEditProfile(e)}
            className="bg-slate-300 cursor-pointer w-32 h-8 mt-6"
          >
            Edit Profile
          </button>
        </div>
      </div>
      {/* <div>
        <div>
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
              <Projects id={id} />
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
              <Reviews />
            </div>
          )}
          {state === "favourites" && <div> <Favourites  /> </div>}
        </div>
      </div> */}
    </div>
  );
}
