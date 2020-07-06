import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_ALERT,
  TOGGLE_REPOS_LOADING,
  TOGGLE_USER_LOADING,
  TOGGLE_USERS_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case TOGGLE_REPOS_LOADING:
      return {
        ...state,
        reposLoading: !state.reposLoading,
      };
    case TOGGLE_USER_LOADING:
      return {
        ...state,
        userLoading: !state.userLoading,
      };
    case TOGGLE_USERS_LOADING:
      return {
        ...state,
        usersLoading: !state.usersLoading,
      };
    default:
      return state;
  }
};
