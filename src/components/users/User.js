import React, { Component } from "react";
import PropTypes from "prop-types";

// components
import Spinner from "../layout/Spinner";

class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    userLoading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    user: {},
    userLoading: false,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const { name } = this.props.user;
    const { userLoading } = this.props;

    return userLoading ? <Spinner /> : <div>{name}</div>;
  }
}

export default User;
