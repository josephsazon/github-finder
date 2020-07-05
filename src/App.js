import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// components
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

// styles
import "./App.css";

class App extends Component {
  state = {
    alert: null,
    repos: [],
    reposLoading: false,
    user: [],
    userLoading: false,
    users: [],
    usersLoading: false,
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  getUser = (username) => {
    this.setState({ userLoading: true });

    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ userLoading: false });
      });
  };

  getUserRepos = (username) => {
    this.setState({ reposLoading: true });

    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        this.setState({ repos: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ reposLoading: false });
      });
  };

  searchUsers = (text) => {
    this.setState({ usersLoading: true });
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        this.setState({ users: response.data.items });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ usersLoading: false });
      });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    const {
      alert,
      repos,
      reposLoading,
      user,
      userLoading,
      users,
      usersLoading,
    } = this.state;

    return (
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
                      clearUsers={this.clearUsers}
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
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
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
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
    );
  }
}

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export default App;
