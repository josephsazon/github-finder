import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  TOGGLE_USERS_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        usersLoading: !state.usersLoading,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
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
