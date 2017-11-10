import React from 'react';
import Search from "./components/Search";
import Saved from "./components/Saved";
import './style.css'

const App = props => 
  <div className="container-fluid">
    <div className="jumbotron text-center">
      <h1 className="display-2">New York Times React Search</h1>
      <h1>Search for articles and save the ones you enjoyed!</h1>
    </div>
    <Search />
    <Saved />
  </div>;

export default App;
