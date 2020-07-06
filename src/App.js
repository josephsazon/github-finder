import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// state
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
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <GithubState>
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
                    <Alert alert={alert} />
                    <Search showAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About}></Route>
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <Fragment>
                    <User {...props} />
                  </Fragment>
                )}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export default App;
