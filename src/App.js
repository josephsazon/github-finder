import React, { Component } from "react";

// components
import Navbar from "./components/layout/Navbar";

// styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
