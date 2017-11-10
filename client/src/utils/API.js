import axios from "axios";

export default {
  getSearch: function(search) {
    const apiKey = "f3539df570a247a7bcc391d4572768c5";
    const baseSearchQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;
    const startDate = search.startDate || "1900-01-01";
    const endDate = search.endDate || "2100-01-01";
    const query = baseSearchQuery + "&q=" + search.search
                + "&begin_date=" + startDate.trim() 
                + "&end_date=" + endDate.trim();
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
