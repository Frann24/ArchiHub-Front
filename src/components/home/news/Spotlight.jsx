import React from "react";
import { useParams } from "react-router-dom";
import news from "../../../api/news"
import NewsReel from "./NewsReel";



export default function spotlight() {

const params = useParams()
// const dispatch= useDispatch
const spotlight = news[0]

  return (
    <div>
        <img src ={spotlight.image} width="300px" alt="news"/>
        <div>{spotlight.date}</div>
        <div>{spotlight.shortDescription}</div>
        <NewsReel newsId={spotlight.id}/>

    </div>
  )
}


