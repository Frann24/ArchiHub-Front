import React from "react";

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
    <div className="w-1/2 mx-auto mt-6">
      <div className="flex flex-col-2 mb-12 w-full">
        <div className="mt-6 mr-12">
          <img
            // src={`${user.avatar}`}
            src={user.avatar}
            width="400px"
            className="rounded-full mt-16"
          />
        </div>
        <div>
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
