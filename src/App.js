import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// state
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

// components
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";

// styles
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
