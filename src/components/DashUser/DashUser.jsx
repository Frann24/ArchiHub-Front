import React from "react";

export default function DashUser() {
  return (
    <div className="w-1/2 mx-auto mt-6">
      <div className="flex flex-wrap mb-12 w-full">
        <div className=" mt-6 ml-12 grid grid-cols-1 sm:grid-cols-2 sm:gap-12 md:gap-12 ">
          <img
            src="https://res.cloudinary.com/do3dbemlj/image/upload/v1664814532/aboutUs/IMG_4843_i7t70p.png"
            width="200px"
            className="rounded-full"
          />
          <div>
            <div className="font-bold text-lg capitalize mt-12 ">
              name lastname{" "}
            </div>
            <div className=" text-lg">nickname </div>

            <div className="mt-20">
              <button className="bg-slate-300 cursor-pointer w-32 h-8">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 mt-16 ml-12 w-1/2">
          <div className="tracking-wider text-lg hover:border-b-2 border-slate-300">
            Projects
          </div>
          <div className="tracking-wider text-lg hover:border-b-2 border-slate-300">
            Posts
          </div>
          <div className="tracking-wider text-lg border-b-2 border-white hover:border-b-2 hover:border-slate-300">
            Reviews
          </div>
          <p className="tracking-wider text-lg hover:border-b-2 border-slate-300">
            Favourites
          </p>
        </div>
      </div>
      <div className="border-y-2 border-slate-200 w-full"></div>
    </div>
  );
}
