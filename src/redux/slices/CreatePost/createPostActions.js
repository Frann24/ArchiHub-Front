import axios from "axios"
import { createPost } from "./createPostSlice"

export const createThePost =  (payload) => {
    return function (dispatch) {
        return axios.post(`http://localhost:3001/api/post$`, payload)
        .then((res) => {
            console.log(res.data);
            dispatch(createPost(res.data))})
        .catch((err) => console.log(err))
    } 
}