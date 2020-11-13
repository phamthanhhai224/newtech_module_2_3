import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Service } from "../../service/service";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      inputIsEmpty: false,
      passwordIsPassword2: true,
      isSignUpError: false,
    };
  }
  registerHandle = () => {
    if (
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.password2 === 0
    ) {
      this.setState({ inputIsEmpty: true });
    }
    if (this.state.password !== this.state.password2) {
      this.setState({ passwordIsPassword2: false });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let res = await Service.postRegister(this.state.email, this.state.password);
    if (res.error) this.setState({ isSignUpError: true });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>Register</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label>Reenter password</label>
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password2: e.target.value });
              }}
              className="form-control"
              placeholder="Reenter password"
            />
          </div>

          <button
            onClick={() => {
              this.registerHandle();
            }}
            className="btn btn-dark btn-lg btn-block"
          >
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to={"/sign-in"}>Sign in</Link>
          </p>
        </form>
        {this.state.inputIsEmpty ? <p>You must enter all field</p> : ""}
        {!this.state.passwordIsPassword2 ? (
          <p>Two password filed must be the same</p>
        ) : (
          ""
        )}
        {this.state.isSignUpError ? <p>email is registered </p> : ""}
      </div>
    );
  }
}
