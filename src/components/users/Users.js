import React, { Component } from "react";
import PropTypes from "prop-types";

// components
import UserItem from "./UserItem";

class Users extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    usersLoading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    users: [],
    usersLoading: false,
  };

  render() {
    const { users, usersLoading } = this.props;

    return (
      <div style={userStyle}>
        {usersLoading ? (
          <p>Loading</p>
        ) : (
          this.props.users.map((user) => <UserItem key={user.id} user={user} />)
        )}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
