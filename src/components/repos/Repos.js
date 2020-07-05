import React from "react";
import PropTypes from "prop-types";

// components
import RepoItem from "./RepoItem";
import Spinner from "../layout/Spinner";

const Repos = ({ repos, reposLoading }) => {
  return reposLoading ? (
    <Spinner />
  ) : (
    repos.map((repo) => <RepoItem repo={repo} key={repo.id} />)
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  reposLoading: PropTypes.bool,
};

Repos.defaultProps = {
  repos: [],
  reposLoading: false,
};

export default Repos;
