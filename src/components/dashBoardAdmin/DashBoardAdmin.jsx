import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/user/userActions";
import { updateUser } from "../../redux/slices/user/userActions";

function DashBoardAdmin() {
const dispatch = useDispatch()
const allUsers = useSelector(state => state.user.allUsers)

useEffect(() => {
    dispatch(getAllUsers())
}, [dispatch])   

function handleChangeStatus (id, e) {
    dispatch(updateUser(id, {status: e.target.value}))
}
  return (
    <div>
        <div className="flex flex-row gap-6">
            <h2>Members</h2>
            <h2>Mail</h2>
            <h2>Posts</h2>
            <h2>Proyects</h2>
            <h2>Type</h2>
        </div>
        {
            allUsers.length && allUsers.map((el) => {
                const statusUser = el.status
                const statusOptions = []
                statusUser === 'active' && statusOptions.push('banned', 'inactive');
                statusUser === 'banned' && statusOptions.push('active', 'inactive');
                statusUser === 'inactive' && statusOptions.push('banned', 'active');

                return (
                    <div>
                    <div className="flex flex-row gap-6">
                        {/* <h1>{el._id}</h1> */}
                        <h2>{el.name}</h2>
                        <h2>{el.email}</h2>
                        <h2>{el.posts.length}</h2>
                        <h2>{el.projects.length === 0 ? 0 : el.projects.length}</h2>
                        <h2>{el.type}</h2>
                      
                        <select onChange={(e) => handleChangeStatus(el._id, e)}>
                            <option disabled selected defaultValue>{statusUser}</option>
                            <option value={statusOptions[0]}>{statusOptions[0]}</option>
                            <option value={statusOptions[1]}>{statusOptions[1]}</option>
                        </select>
                    </div>
                    </div>
                )
            })
        
        }
    </div>
  );
}

export default DashBoardAdmin;
