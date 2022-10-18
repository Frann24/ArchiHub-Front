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
        <div>
            <h2>Recents users created</h2>
            {
                recentsUsers && recentsUsers.map((user) => {
                    return (
                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.createdAt.slice(0, 10)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecentsUsers