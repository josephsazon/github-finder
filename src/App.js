import React, { Component } from "react";

// components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

// styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
