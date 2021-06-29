import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    

  </Router>
, document.getElementById("root"));
