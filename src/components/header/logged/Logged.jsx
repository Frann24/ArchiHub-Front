import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../redux/slices/auth/loginActions";

function Logged() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [projectMenu, setProjectMenu] = useState(false);
  const [createMenu, setCreateMenu] = useState(false)
  const googleUser = JSON.parse(localStorage.getItem('googleUser'))
  const token = JSON.parse(localStorage.getItem('token'))
  let lastname ,name ,userAvatar, userMail, userType
  if(token){
    lastname = token.lastname
    name = token.name
    userAvatar = token.userAvatar
    userMail = token.userMail
    userType = token.userType
}

  const projects = [
    { name: "Name project 1" },
    { name: "Name project 2" },
    { name: "Name project 3" },
  ];
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogout =  (e) => {
    // e.preventDefault();
    dispatch(logOutUser())
    localStorage.removeItem("googleUser")
    navigate("/")
  }

  return (
    <>
      <div onClick={() => setCreateMenu(!createMenu)} className={`hidden p-1 text-sm cursor-pointer text-gray-600 border rounded hover:bg-gray-200
      ${createMenu && "bg-gray-200"}
      xl:flex
      `}>
        <FontAwesomeIcon className="px-1 cursor-pointer" icon={faPlus}/>
        <FontAwesomeIcon className="px-1 cursor-pointer" icon={createMenu ? faAngleUp : faAngleDown}/>
        {createMenu && <div className="absolute mt-10 text-gray-600 w-[16vw] flex flex-col bg-gray-100 rounded gap-2 cursor-default
        xl:w-[15vw]
        2xl:w-[8vw]
        ">
            <Link className="p-2 hover:bg-gray-200 cursor-pointer rounded">New post</Link>
            <Link className="p-2 hover:bg-gray-200 cursor-pointer rounded">New project</Link>
            {/* <Link>New commit project</Link> */}
        </div>}
      </div>
      <div
      title="Open menu"
      onClick={() => [setShowSidebar(!showSidebar), setCreateMenu(false)]}
      className="cursor-pointer flex items-center gap-4" 
    >
      <div className="flex order-2 items-center justify-center w-8  overflow-hidden rounded-full
      sm:w-9
      lg:w-11
      xl:w-12
      ">
        <img src={userAvatar} alt="" />
      </div>
      <div className="hidden sm:flex flex-col text-end">
        <p className="text-sm lg:text-base font-medium">{name}</p>
        <p className="text-xs lg:text-sm text-gray-600">{userMail}</p>
      </div>
    </div> 
      {showSidebar && <div onClick={()=> setShowSidebar(!showSidebar)} className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"></div>}
      <div
        className={`top-0 right-0 fixed bg-gray-100 w-11/12 h-full text-center  ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500
      sm:w-1/2
      md:w-[45vw]
      lg:w-[35vw]
      xl:w-[30vw]
      2xl:w-[20vw]
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
              <img src={userAvatar} alt="" />
            </div>
            <div className="my-4">
              <h3 className="text-xl">{name}</h3>
              <p className="text-gray-400">{userMail}</p>
            </div>
            <div className="text-start pl-4 mt-8 flex flex-col gap-4 lg:text-lg xl:text-xl">
              <div className="flex flex-col items-start lg:hidden">
                <div onClick={() => setCreateMenu(!createMenu)}>
                  <span className="pr-2">Create</span>
                  <FontAwesomeIcon className="text-gray-600" icon={faAngleDown} />
               </div>
                {createMenu && <div className="pl-4 w-auto text-gray-600 text-sm flex flex-col gap-2">
                  <Link>New post</Link>
                  <Link>New project</Link>
                  {/* <Link>New commit project</Link> */}
                </div>}
              </div>
              <div>
                <Link to={`/user/user`}>My profile</Link>
              </div>
              <div>
                <Link to="/user/posts">My posts</Link>
              </div>
              <div>
                <Link to="/user/projects">My projects</Link>
              </div>
              <div>
                <div className="cursor-pointer" onClick={() => setProjectMenu(!projectMenu)}>
                  <span className="pr-2">Recent projects</span>
                  <FontAwesomeIcon  className="text-gray-600" icon={faAngleDown} />
                </div>
                {projectMenu && <div className="pl-4 mt-1 w-auto text-gray-600 text-sm flex flex-col gap-2">
                  {projects.map((e, i) => (
                      <Link key={i} to="">{e.name}</Link>
                  ))}
                </div>}
              </div>
              <div>
                <Link to="/user/favourites">My favourites</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="m-4 px-4 py-2 bg-blue-600 text-gray-50 cursor-pointer">
              <button onClick={()=> setShowSidebar(false)} className="font-semibold"><Link to="/payment">Upgrade to Premium </Link></button>
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
