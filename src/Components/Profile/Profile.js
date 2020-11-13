import { Button } from "bootstrap";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Detail from "../Detail";
import ChangePassword from "./ChangePassword";
import { Service } from "../../service/service";
import Friend from "./Friend";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("auth-token")
      ? localStorage.getItem("auth-token")
      : "";
    this.state = {
      user_token: token,
      isLogin: token.length > 1 ? true : false,
    };
  }

  logOut = async () => {
    await localStorage.removeItem("auth-token");
    this.setState({
      isLogin: false,
    });
  };
  render() {
    if (!this.state.isLogin) return <Redirect to="/" />;
    else
      return (
        <div className="container">
          <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-changePassword-tab"
                  data-toggle="pill"
                  href="#pills-changePassword"
                  role="tab"
                  aria-controls="pills-changePassword"
                  aria-selected="false"
                >
                  Change Password
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-friend-tab"
                  data-toggle="pill"
                  href="#pills-friend"
                  role="tab"
                  aria-controls="pills-friend"
                  aria-selected="false"
                >
                  Friend
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <Detail></Detail>
              <ChangePassword></ChangePassword>
              <Friend />
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                ...
              </div>
            </div>
          </div>
          <div className="btn btn-danger" onClick={this.logOut}>
            Log out
          </div>
        </div>
      );
  }
}
