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
  };

  componentDidMount() {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
