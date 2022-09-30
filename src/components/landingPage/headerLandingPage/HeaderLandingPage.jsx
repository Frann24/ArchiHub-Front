import React from "react";
import { Link } from "react-router-dom";

function HeaderLandingPage() {
  return (
    <div className="bg-white">
    <div className="flex justify-between items-center mx-32">
      <div className="flex gap-8 items-center">
        <h2 className="my-4 py-2 text-4xl font-light">
          <Link to="/home">
            <span className="font-semibold">ARQUI</span>HUB
          </Link>
        </h2>
        {/* <ul className="ml-12 text-lg">
        <li className="inline relative group cursor-pointer">
            <span>Sign in</span>
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <div className="border border-gray-900 bg-gray-900 py-1.5 inline m-2 "></div>
          <li className="inline relative group cursor-pointer">
            <span>Sign up</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul> */}
      </div>
      <div className="">
        <Link to="/home">
        <button className="text-xl border-r-4 py-1 px-4 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-500 ">
          Start now
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default HeaderLandingPage;
