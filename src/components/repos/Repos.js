import React from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Repos = ({ repos, reposLoading }) => {
  console.log(repos);
  return reposLoading ? <Spinner /> : <div>Repos</div>;
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
