import React, { Component } from "react";

// components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import UserItem from "./components/users/UserItem";

// styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
        <UserItem />
      </div>
    );
  }
}

export default App;
