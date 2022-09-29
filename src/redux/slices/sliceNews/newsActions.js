import axios from "axios"
import newsSlice from "./newsSlice"
import {getNews, getNewsById} from newsSlice

export const getNews=()=>(dispatch)=>{
axios("http://localhost:3001/api/news")
.then(res=>dispatch(getNews(res.data)))
.caatch(e=>console.log(e))
}