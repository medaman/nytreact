import React, { Component } from "react";
import API from "../utils/API";

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
      <div className="card">
        <div className="card-header">
          Saved Articles
        </div>
        {
          this.state.saved.map(article => {
            return (
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-2">
                    <img alt="none" src={article.imgUrl}/>
                  </div>
                  <div className="col-sm-10">
                    <h4 className="card-title">
                      {article.title}
                    </h4>
                    <h6>
                      {article.author}
                    </h6>
                    <p className="card-text">
                      Published on: {article.date.split("T")[0]} at {article.date.split("T")[1].split(":")[0]}:{article.date.split("T")[1].split(":")[1]}
                    </p>
                    <p>
                      {article.snippet}
                    </p>
                    <a href={article.url} target="_blank" className="btn btn-secondary">
                      View Article
                    </a>
                    <button
                      className="btn btn-danger"
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
