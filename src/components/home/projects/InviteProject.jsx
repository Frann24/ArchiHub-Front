import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProject } from '../../../redux/slices/project/projectActions'
import { getUser } from '../../../redux/slices/user/userActions'
import Unauthorized from "../../errors/Unauthorized"


function InviteProject(){

    const dispatch = useDispatch()
    const { projectId } = useParams()
    const user = JSON.parse(localStorage.getItem("token"))
    let {userId} = user
    const logged = useSelector((state)=>state.user.user)
    const project = useSelector((state)=>state.project.project) 
    const [invite, setInvite]= useState(false)

    useEffect(()=>{
        dispatch(getUser(userId))
        dispatch(getProject(projectId))
    },[dispatch, userId, projectId])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setInvite(true)
    }

    return (
    <div>
        {!userId.length? 
    <div>
        <Unauthorized/>
    </div>
    :
<div>
<h1>{`${logged.nickname}, you have been invited to project`} <span> {project.title} </span></h1>
<h1>Do you want to participate?</h1>
        <form>
            <button onClick={handleSubmit}>
                Yes
            </button>
            <button onClick={handleSubmit}>
                No
            </button>
        </form>

</div>        
}
</div>
)
}


export default InviteProject