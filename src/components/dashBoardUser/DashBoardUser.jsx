import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser, getAllUsers} from '../../redux/slices/user/userActions'
import FormEditProfile from "./FormEditProfile";
import Post from "./Post";
import Projects from "./Projects";


export default function DashBoardUser() {
  const dispatch = useDispatch()
  const userLogeado = JSON.parse(localStorage.getItem("token"))
  const user = useSelector(state => state.user.user)
  const [state, setState] = useState('projects')
  const [profile, setProfile] = useState(false)

  
  useEffect(() => {
    dispatch(getUser("633a026b092c0858a7bb580b"))  //aca iria userLogeado.userId
  },[dispatch])
 

  function handleChange(e) {
    setState(e.target.value)
  }
  function handleEditProfile(e) {
    profile ? setProfile(false) : setProfile(true)
  }
  
 

  return (
    <div className="w-1/2 mx-auto mt-6">
      <div className="flex flex-wrap mb-12 w-full">
        <div className=" mt-6 ml-12 grid grid-cols-1 sm:grid-cols-2 sm:gap-12 md:gap-12 ">
          <img
            src={userLogeado.userAvatar}
            width="200px"
            className="rounded-full"
          />
          <div>
            <div className="font-bold text-lg capitalize mt-12 ">
              {user.name} {user.lastname}
            </div >
            <div className=" text-lg">{user.nickname} </div>

            <div className="mt-20">
              <button onClick={(e) => handleEditProfile(e)} className="bg-slate-300 cursor-pointer w-32 h-8">
                Edit Profile
              </button>
            </div>
            {
              profile &&
              <div>
                <FormEditProfile/>
              </div>
            }
          </div>
        </div>

        <div className="flex flex-row gap-10 mt-16 ml-12 w-1/2">

          <div className="tracking-wider text-lg hover:border-b-2 border-slate-300">
            <button value='projects' onClick={(e) => handleChange(e)}>
              Projects
            </button>
          </div>

          <div className="tracking-wider text-lg hover:border-b-2 border-slate-300">
              <button value='posts' onClick={(e) => handleChange(e)}>
                Posts
              </button>
          </div>

          <div className="tracking-wider text-lg border-b-2 border-white hover:border-b-2 hover:border-slate-300">
            <button value='reviews' onClick={(e) => handleChange(e)}>
              Reviews
            </button>
          </div>

          <div className="tracking-wider text-lg border-b-2 border-white hover:border-b-2 hover:border-slate-300">
            <button value='favourites' onClick={(e) => handleChange(e)}>
              Favourites
            </button>
          </div>

        </div>



      </div>
      <div>
        {
          state === 'posts' && 
          <div>
            <h2>Your posts...</h2>
            <Post id={userLogeado.userId}/>
          </div>
        }
        {
          state === 'projects' && 
          <div>
            <h2>Your projects...</h2>
            <Projects id={userLogeado.userId}/>
          </div>
        }
      </div>
    </div>
  );
}
