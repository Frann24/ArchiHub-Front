import { useState } from "react"
import Users from "./Users"
import ChartUsers from "./ChartUsers"
import ChartPayments from "./ChartPayments"
import RecentsUsers from "./RecentsUsers"

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
                    <ChartPayments />
                    <RecentsUsers />
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