import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Detail from "../Detail";
import ChangePassword from "./ChangePassword";
import Friend from "./Friend";
import RequestAndReceive from "./RequestAndReceive";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

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
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="profile" title="profile">
              <Detail />
            </Tab>
            <Tab eventKey="changePassword" title="change Password">
              <ChangePassword />
            </Tab>
            <Tab eventKey="RequestAndReceive" title="Request Receive">
              <RequestAndReceive />
            </Tab>
            <Tab eventKey="Friend" title="Friend">
              <Friend />
            </Tab>
          </Tabs>

          <div className="btn btn-danger" onClick={this.logOut}>
            Log out
          </div>
        </div>
      );
  }
}
