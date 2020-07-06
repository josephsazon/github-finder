import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// state
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

// components
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

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
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Alert />
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                ></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
