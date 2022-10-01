import axios from "axios"
import { getUsers } from "./getUsersSlice"


export const getAllUsers = () => {
    return function (dispatch) {
        return axios.get("http://localhost:3001/api/user")
        .then((res) => dispatch(getUsers(res.data)))
        .catch((err) => console.log(err))
    }
}
