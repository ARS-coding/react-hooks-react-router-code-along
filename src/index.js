import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Home />
    </Route>


  </Router>
, document.getElementById("root"));
