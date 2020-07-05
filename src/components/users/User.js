import React, { Component } from "react";

// components
import Spinner from "../layout/Spinner";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const { user, userLoading } = this.props;

    return userLoading ? <Spinner /> : <div>{user.name}</div>;
  }
}

export default User;
