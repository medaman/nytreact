import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Results from "./Results";

class Search extends Component {
  state = {
    search: "",
    startDate: "",
    endDate: "",
    results: []
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }
  handleStartDateChange = (event) => {
    this.setState({
      startDate: event.target.value
    });
  }
  handleEndDateChange = (event) => {
    this.setState({
      endDate: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getSearch(this.state)
       .then(res => {
        this.setState({
          results: res.data.response.docs
        });
        console.log(this.state.results);
       });
  }

  handleSave = (article) => {
    let imgUrl = "";
    if (article.multimedia[0]) {
      const imageUrl = "http://www.nytimes.com/" + article.multimedia[0].url;
    }
    API.saveArticle({
      title: article.headline.main,
      date: article.pub_date,
      author: article.byline.original,
      imgUrl: imgUrl,
      url: article.web_url,
      snippet: article.snippet
    });
  }

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            Search
          </div>
          <div class="card-body">
            <SearchForm
              handleSearchChange={this.handleSearchChange}
              handleStartDateChange={this.handleStartDateChange}
              handleEndDateChange={this.handleEndDateChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            Search Results
          </div>
          <Results
            results={this.state.results}
            handleSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

export default Search;
