import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// components
import Spinner from "../layout/Spinner";

class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    userLoading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    user: {},
    userLoading: false,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const { avatar_url, name, hirable, location } = this.props.user;
    const { userLoading } = this.props;

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
        </div>
      </Fragment>
    );
  }
}

export default User;
