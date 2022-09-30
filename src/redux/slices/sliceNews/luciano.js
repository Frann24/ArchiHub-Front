import newsSlice from "./newsSlice";
import { getNews } from "./newsSlice";
const axios = require("axios");

// export const getNews1 = () => (dispatch) => {
//   return fetch("http://localhost:3001/api/news")
//     .then((res) => res.json())
//     .then((result) => console.log("result: ", result))

//     .catch((e) => console.log("error: ", e.response.data));
// };

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
