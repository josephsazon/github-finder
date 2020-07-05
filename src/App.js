import React, { Component } from "react";
import axios from "axios";

// components
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

// styles
import "./App.css";

class App extends Component {
  state = {
    users: [],
    usersLoading: false,
  };

  componentDidMount() {
    this.setState({ usersLoading: true });
    axios
      .get(
        `https://api.github.com/users?client_id=${clientId}}&client_secret=${clientSecret}`
      )
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ usersLoading: false });
      });
  }

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

  render() {
    const { users, usersLoading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users users={users} usersLoading={usersLoading} />
        </div>
      </div>
    );
  }
}

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export default App;
