import { NEWS } from "../constants";
import newsSlice from "./newsSlice";
import { getNews } from "./newsSlice";
const axios = require("axios");

export function getNews1() {
  return function (dispatch) {
    axios
      .get(NEWS)
      .then((res) => dispatch(getNews(res.data)))
      .catch((error) => console.log(error));
  };
}
