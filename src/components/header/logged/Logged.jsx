import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../redux/slices/auth/loginActions";

function Logged() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [createMenu, setCreateMenu] = useState(false)
  const img ="https://img.a.transfermarkt.technology/portrait/header/28003-1631171950.jpg?lm=1";
  const userName = "LionelM10";
  const mail = "liom10@gmail.com";
  const name = "Lionel Andrés Messi";
  const projects = [
    { name: "project 1" },
    { name: "project 2" },
    { name: "project 3" },
  ];
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogout =  (e) => {
    // e.preventDefault();
    dispatch(logOutUser())
    navigate("/")
  }

  return (
    <>
      <div onClick={() => setCreateMenu(!createMenu)} className="cursor-pointer text-gray-600 border rounded ">
          <FontAwesomeIcon className="px-1" icon={faPlus}/>
          <FontAwesomeIcon className="px-1" icon={faAngleDown}/>
      </div>
      {createMenu && <div>Sub menu</div>}
      <div
        title="Open menu"
        onClick={() => setShowSidebar(!showSidebar)}
        className="cursor-pointer flex items-center gap-4" 
      >
        <div className="flex order-2 items-center justify-center w-10 h-10 mx-2 overflow-hidden rounded-full
        sm:w-12 sm:h-12
        lg:w-14 lg:h-14
        xl:w-16 xl:h-16
        ">
          <img src={img} alt="" />
        </div>
        
        <div className="hidden sm:flex flex-col text-end">
          <p className="text-sm lg:text-base font-medium">{userName}</p>
          <p className="text-xs lg:text-sm text-gray-600">{mail}</p>
        </div>
      </div>
      {showSidebar && <div onClick={()=> setShowSidebar(!showSidebar)} className="fixed top-0 left-0 w-screen h-screen"></div>}
      <div
        className={`top-0 right-0 fixed bg-gray-100 w-full h-full text-center ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500
      sm:w-1/2
      md:w-[45vw]
      xl:w-[30vw]
      2xl:w-[25vw]
      `}
      >
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-30 absolute left-0 m-2 py-1 px-2 text-2xl text-gray-400 hover:bg-gray-200 rounded"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={`flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-center w-16 h-16 overflow-hidden rounded-full m-auto mt-4
            sm:w-20 sm:h-20
            ">
              <img src={img} alt="" />
            </div>
            <div className="my-4">
              <h3 className="text-xl">{name}</h3>
              <p className="text-gray-400">{mail}</p>
            </div>
            <div className="text-start pl-4 mt-8 flex flex-col gap-4 lg:text-lg xl:text-xl">
              <div>
                <Link to="">My profile</Link>
              </div>
              <div>
                <Link to="">My posts</Link>
              </div>
              <div>
                <Link to="">My projects</Link>
              </div>
              <div className="pl-4 text-gray-600">
                {projects.map((e, i) => (
                  <div key={i} className="py-1">
                    <Link to="">{e.name}</Link>
                  </div>
                ))}
              </div>
              <div>
                <Link to="">My favourites</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="m-4 px-4 py-2 bg-blue-600 text-gray-50 cursor-pointer">
              <button className="font-semibold">Upgrade to Premium</button>
            </div>
            <div className="m-4 px-4 py-2 bg-gray-600 text-gray-50 cursor-pointer">
              <button onClick={handleLogout} className="font-semibold">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logged;
