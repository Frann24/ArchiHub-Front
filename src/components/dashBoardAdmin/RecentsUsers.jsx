import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../redux/slices/user/userActions"
function RecentsUsers () {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.user.allUsers)
    const recentsUsers = allUsers.slice(-5)
    useEffect(() => {
    dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div className="">
            <h2 className="mt-10 font-bold">Recents users:</h2>
            <div className=" ">
            {
                recentsUsers && recentsUsers.map((user) => {
                    return (
                        <div className="">
                        <div className=" gap-10 my-6">
                            <p className="capitalize">{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.createdAt.slice(0, 10)}</p>
                        </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default RecentsUsers