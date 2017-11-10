import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Results from "./Results";

class Saved extends Component {
  state = {
    saved: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  componentDidUpdate() {
    this.loadArticles();    
  }

  loadArticles = () => {
    API.getSaved()
       .then(res =>
        this.setState({
          saved: res.data
        })
       );
  }

  deleteArticle = (id) => {
    API.deleteArticle(id)
       .then(res => this.loadArticles())
       .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="card">
        <div class="card-header">
          Saved Articles
        </div>
        {
          this.state.saved.map(article => {
            return (
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-2">
                    <img alt="no-image" src={article.imgUrl}/>
                  </div>
                  <div class="col-sm-10">
                    <h4 class="card-title">
                      {article.title}
                    </h4>
                    <h6>
                      {article.author}
                    </h6>
                    <p class="card-text">
                      Published on: {article.date.split("T")[0]} at {article.date.split("T")[1].split(":")[0]}:{article.date.split("T")[1].split(":")[1]}
                    </p>
                    <p>
                      {article.snippet}
                    </p>
                    <a href={article.url} target="_blank" class="btn btn-secondary">
                      View Article
                    </a>
                    <button
                      class="btn btn-danger"
                      onClick={() => this.deleteArticle(article._id)}
                    >
                      Remove from Saved
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Saved;
