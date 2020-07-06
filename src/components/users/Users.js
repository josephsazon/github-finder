import React, { useContext } from "react";

// state
import GithubContext from "../../context/github/githubContext";

// components
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, usersLoading } = githubContext;

  return usersLoading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
