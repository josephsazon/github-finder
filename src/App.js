import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// components
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

// styles
import "./App.css";

class App extends Component {
  state = {
    alert: null,
    users: [],
    usersLoading: false,
  };

  clearUsers = () => {
    this.setState({ users: [] });
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
    const { alert, users, usersLoading } = this.state;

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
