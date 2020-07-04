import React, { Component } from "react";
import axios from "axios";

// components
import Navbar from "./components/layout/Navbar";
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
      .get("https://api.github.com/users")
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
          <Users users={users} usersLoading={usersLoading} />
        </div>
      </div>
    );
  }
}

export default App;
