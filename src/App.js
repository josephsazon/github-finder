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
  const [repos, setRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(false);
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);

  const clearUsers = () => {
    setUsers([]);
  };

  const getUser = (username) => {
    setUserLoading(true);

    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const getUserRepos = (username) => {
    setReposLoading(true);

    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setReposLoading(false);
      });
  };

  const searchUsers = (text) => {
    setUsersLoading(true);

    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        setUsers(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setUsersLoading(false);
      });
  };

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
                    <Search
                      clearUsers={clearUsers}
                      searchUsers={searchUsers}
                      showAlert={showAlert}
                      showClear={users.length ? true : false}
                    />
                    <Users users={users} usersLoading={usersLoading} />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About}></Route>
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <Fragment>
                    <User
                      {...props}
                      getUser={getUser}
                      getUserRepos={getUserRepos}
                      repos={repos}
                      reposLoading={reposLoading}
                      user={user}
                      userLoading={userLoading}
                    />
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
