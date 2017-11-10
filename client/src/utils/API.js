import axios from "axios";

export default {

  getArticles: function(query) {
   return axios.get("/search", { params: query});
 },
  saveArticle: function(articleData) {
    console.log(" save API.js hit");
    console.log(articleData);
    return axios.post("/save/", articleData);
  },
};
