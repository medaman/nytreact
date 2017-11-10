import axios from "axios";

export default {
  getSearch: function(search) {
    const apiKey = "f3539df570a247a7bcc391d4572768c5";
    const baseSearchQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey
    const query = baseSearchQuery + "&q=" + search.search
                + "&begin_date=" + search.startDate.trim() 
                + "&end_date=" + search.endDate.trim();
    console.log(query);

    return axios.get(query)
  },

  getSaved: function() {
    return axios.get("/api/articles");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
