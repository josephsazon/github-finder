import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
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
        users: action.payload,
      };
    default:
      return state;
  }
};
