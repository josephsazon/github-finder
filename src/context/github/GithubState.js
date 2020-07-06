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
  SET_LOADING,
  TOGGLE_USERS_LOADING,
} from "../types";

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

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
  const searchUsers = (text) => {
    toggleUsersLoading();

    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then((response) => {
        dispatch({ type: SEARCH_USERS, payload: response.data.items });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        toggleUsersLoading();
      });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Toggle users loading
  const toggleUsersLoading = () => dispatch({ type: TOGGLE_USERS_LOADING });

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        reposLoading: state.reposLoading,
        user: state.user,
        userLoading: state.userLoading,
        users: state.users,
        usersLoading: state.usersLoading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
