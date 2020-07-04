import React, { Component } from "react";
import PropTypes from "prop-types";

// components
import UserItem from "./UserItem";
import Spinner from "../layout/Snipper";

const Users = ({ users, usersLoading }) => {
  return usersLoading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      )
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  usersLoading: PropTypes.bool.isRequired,
};

Users.defaultProps = {
  users: [],
  usersLoading: false,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
