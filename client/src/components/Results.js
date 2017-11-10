import React from "react";

const Results = (props) => {
  return (
    <div>
      {
        props.results.map(article => {
          return (
            <div class="card-body">
              <div class="row">
                <div class="col-sm-2">
                  <img alt="no-image" src={article.multimedia[0] ? "http://www.nytimes.com/" + article.multimedia[0].url : ""}/>
                </div>
                <div class="col-sm-10">
                  <h4 class="card-title">
                    {article.headline.main}
                  </h4>
                  <h6>
                    {article.byline.original}
                  </h6>
                  <p>
                    Published on: {article.pub_date.split("T")[0]} at {article.pub_date.split("T")[1].split(":")[0]}:{article.pub_date.split("T")[1].split(":")[1]}
                  </p>
                  <p>
                    {article.snippet}
                  </p>
                  <a href={article.web_url} target="_blank" class="btn btn-secondary">
                    View Article
                  </a>
                  <button 
                    class="btn btn-success"
                    onClick={() => props.handleSave(article)}
                  >
                    Save Article
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

export default Results;