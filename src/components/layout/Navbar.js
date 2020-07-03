import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: "fab fa-github",
    title: "Github Finder",
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
