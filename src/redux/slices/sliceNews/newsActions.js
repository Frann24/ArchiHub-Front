import newsSlice from "./newsSlice";
import { getNews } from "./newsSlice";
const axios = require("axios");

export function getNews1() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/api/news");
      console.log("json: ", json);
      return dispatch(getNews(json.data));
    } catch (error) {
      
      console.log(error);
    }
  };
}
