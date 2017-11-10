import React from "react";

const SearchForm = props => 
  <form>
    <div class="form-group">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <label htmlFor="search">Search For:</label>
            <input 
              value={props.term}
              onChange={props.handleSearchChange}
              type="text"
              class="form-control"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div class="col-sm-3">
            <label htmlFor="start-date">Start Date:</label>
            <input 
              value={props.startDate}
              onChange={props.handleStartDateChange}
              type="date"
              class="form-control"
              id="start-date"
            />
          </div>
          <div class="col-sm-3">
            <label htmlFor="end-date">End Date:</label>
            <input 
              value={props.endDate}
              onChange={props.handleEndDateChange}
              type="date"
              class="form-control"
              id="end-date"
            />
          </div>
        </div>
      </div>
    </div>
    <button
      type="submit"
      onClick={props.handleFormSubmit}
      class="btn btn-success"
    >
      Search
    </button>
  </form>;

export default SearchForm;
