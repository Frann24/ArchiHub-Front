import { useState } from "react"
import Users from "./Users"
import ChartUsers from "./ChartUsers"
import ChartPosts from "./ChartPosts"


function DashBoard () {
const [state, setState] = useState('dashboard')
    function handleChange(e) {
        setState(e.target.value)
    }
    return (
        <div>
        <div>
            <button value='dashboard' onClick={(e) => handleChange(e)}>DashBoard</button>
            <button value='users' onClick={(e) => handleChange(e)}>Users</button>
        </div>
        <div>
            {
            state === 'dashboard' && 
                <div>
                    <ChartUsers />
                    <ChartPosts />
                </div>
            }
            {
            state === 'users' && 
                <Users />
            }
        </div>
        </div>
    )
}

export default DashBoard