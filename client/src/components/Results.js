import React from "react";

const Results = (props) => {
  return (
    <div>
      {
        props.results.map(article => {
          return (
            <div className="card-body">
              <div className="row">
                <div className="col-sm-2">
                  <img alt="none" src={article.multimedia[0] ? "http://www.nytimes.com/" + article.multimedia[0].url : ""}/>
                </div>
                <div className="col-sm-10">
                  <h4 className="card-title">
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
                  <a href={article.web_url} target="_blank" className="btn btn-secondary">
                    View Article
                  </a>
                  <button 
                    className="btn btn-success"
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