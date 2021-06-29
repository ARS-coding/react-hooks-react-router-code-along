import React from 'react'
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Route path="/"> {/* Show it in every route */}
                <Navbar />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </div>
    )
}

export default App
