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
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

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

  render() {
    const { users, usersLoading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users users={users} usersLoading={usersLoading} />
        </div>
      </div>
    );
  }
}

export default App;
