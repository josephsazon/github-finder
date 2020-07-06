import React, { Fragment, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// state
import GithubContext from "../../context/github/githubContext";

// components
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const {
    getUser,
    getUserRepos,
    repos,
    reposLoading,
    user,
    userLoading,
  } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    name,
    hirable,
    html_url,
    location,
    login,
    public_gists,
    public_repos,
  } = user;

  return userLoading ? (
    <Spinner />
  ) : (
    <Fragment>
      Hirable:{" "}
      {hirable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} reposLoading={reposLoading} />
    </Fragment>
  );
};

export default User;
