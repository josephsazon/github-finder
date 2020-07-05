import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
