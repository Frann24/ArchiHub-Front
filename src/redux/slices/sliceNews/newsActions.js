import { NEWS } from "../constants";
import newsSlice from "./newsSlice";
import { getNews, queryNews } from "./newsSlice";
const axios = require("axios");

export function getNews1() {
  return function (dispatch) {
    axios
      .get(NEWS)
      .then((res) => dispatch(getNews(res.data)))
      .catch((error) => console.log(error));
  };
}

export function getQueryNews(allNews, name) {
  const allNews2 = [...allNews]
  return name?queryNews(allNews2.filter((e) => e.title && e.title.toLowerCase().includes(name.toLowerCase()))):queryNews(allNews)
};