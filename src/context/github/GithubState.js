import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_ALERT,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    repos: [],
    reposLoading: false,
    user: {},
    userLoading: false,
    users: [],
    usersLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Clear users

  // Get repos

  // Get user

  // Search users

  // Set loading

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        reposLoading: state.reposLoading,
        user: state.user,
        userLoading: state.userLoading,
        users: state.users,
        usersLoading: state.usersLoading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
