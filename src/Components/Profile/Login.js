import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Service } from "../../service/service";
class Login extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("auth-token")
      ? localStorage.getItem("auth-token")
      : "";
    this.state = {
      user_token: token,
      isLogin: token.length > 1 ? true : false,
      email: "",
      password: "",
      loginError: false,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.email.length > 1 && this.state.password.length > 1) {
      let resBody = await Service.logIn(this.state.email, this.state.password);
      if (!resBody.error) {
        await localStorage.setItem("auth-token", resBody.body.accessToken);
        this.setState({ isLogin: true });
      } else this.setState({ loginError: true });
    } else this.setState({ loginError: true });
  };

  render() {
    if (!this.state.isLogin)
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h3> Log in </h3>
            <div className="form-group">
              <label> Email </label>{" "}
              <input
                type="email"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                value={this.state.email}
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label> Password </label>{" "}
              <input
                type="password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                value={this.state.password}
                className="form-control"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <button className="btn btn-dark btn-lg btn-block"> Sign in </button>{" "}
            <p className="forgot-password text-right">
              Forgot <Link to={"/sign-up"}> password ? </Link>{" "}
            </p>{" "}
            <p className="forgot-password text-right">
              <Link to={"/sign-up"}> Register </Link>{" "}
            </p>{" "}
          </form>{" "}
          {this.state.loginError ? (
            <p>
              Wrong password or your account not active, check your email for
              activation
            </p>
          ) : (
            ""
          )}
        </div>
      );
    else return <Redirect to="/profile" />;
  }
}
export default Login;
