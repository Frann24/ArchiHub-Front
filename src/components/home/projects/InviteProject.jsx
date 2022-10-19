import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProject } from '../../../redux/slices/project/projectActions'
import { getUser } from '../../../redux/slices/user/userActions'
import { updateUserProject } from '../../../redux/slices/userProject/userProjectActions'
import Unauthorized from "../../errors/Unauthorized"
import { NavLink } from 'react-router-dom'

function InviteProject(){

    const dispatch = useDispatch()
    const { projectId } = useParams()
    const user = JSON.parse(localStorage.getItem("token"))
    let {userId} = user
    const logged = useSelector((state)=>state.user.user)
    const project = useSelector((state)=>state.project.project) 
    const [invite, setInvite]= useState(null)
   
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getUser(userId))
        dispatch(getProject(projectId))
    },[dispatch, userId, projectId])
    

    ;
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(invite === true){
            const objetonto = {user_id: userId}
            dispatch(updateUserProject(projectId, objetonto))
            alert("Now you are part of the project")
            navigate("/home")
        }
        else{
            alert("return")
            navigate("/home")
        }
    }

    return (
    <div>
        {!userId.length? 
    <div>
        <Unauthorized/>
    </div>
    :
<div className='mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64'>
<div className='text-center'>

<div className='xl:text-lg flex flex-col gap-4'><span className='font-semibold'>{`${logged.nickname}`}</span> You have been invited to project: <span className='font-semibold'> {project.title} </span></div>
<h1>Do you want to participate?</h1>
            <div className='w-full mx-auto flex flex-col gap-3 mt-8 lg:bg-gray-100
      lg:w-3/4 rounded-xl lg:shadow-md lg:p-4 lg:py-8 lg:gap-4
      xl:w-1/2'>
        <form onSubmit={handleSubmit}>
     
      <div onClick={handleSubmit} className={`w-full bg-gray-800 lg:hover:bg-gray-600 transition-all duration-200 ease-in text-center cursor-pointer lg:w-3/4 mx-auto xl:w-1/2`}>

            <button className='text-gray-50 p-1 text-lg lg:text-xl $' type='submit' onClick={(e)=>setInvite(true)} value={true} name='yes'>
                Yes
            </button>
        </div>
        <div onClick={handleSubmit} className={`w-full bg-gray-800 lg:hover:bg-gray-600 transition-all duration-200 ease-in text-center cursor-pointer lg:w-3/4 mx-auto xl:w-1/2`}>

            <br></br>
            <button className='text-gray-50 p-1 text-lg lg:text-xl $' type='submit' onClick={(e)=>setInvite(false)} value={false} name='no'>
                No
            </button>
        </div>
            <span className=''>Do you want to go home?</span> <span className='text-blue-500 cursor-pointer hover:underline'><NavLink to="/home"> Click here</NavLink></span>
        </form>
            </div>

    </div>
</div>        
}
</div>
)
}


export default InviteProject