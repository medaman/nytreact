import React from "react";

const SearchForm = props => 
  <form>
    <div className="form-group">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="search">Search For:</label>
            <input 
              value={props.term}
              onChange={props.handleSearchChange}
              type="text"
              className="form-control"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="start-date">Start Date:</label>
            <input 
              value={props.startDate}
              onChange={props.handleStartDateChange}
              type="date"
              className="form-control"
              id="start-date"
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="end-date">End Date:</label>
            <input 
              value={props.endDate}
              onChange={props.handleEndDateChange}
              type="date"
              className="form-control"
              id="end-date"
            />
          </div>
        </div>
      </div>
    </div>
    <button
      type="submit"
      onClick={props.handleFormSubmit}
      className="btn btn-success"
    >
      Search
    </button>
  </form>;

export default SearchForm;
