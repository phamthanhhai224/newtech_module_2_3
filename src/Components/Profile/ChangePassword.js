import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import { RecoverPasswordStyles as UpdatePasswordStyles, GhostInput } from "../ForgetPassword"
import { API_CONST } from '../../service/API';

class ChangePassword extends Component {
  state = {
    password: "",
    confirmPassword: "",
    submitted: false
  }

  handleChange = key => e => {
    this.setState({ [key]: e.target.value })
  }

  updatePassword = e => {
    e.preventDefault()
    const { userId, token } = this.props
    const { password } = this.state

    axios
      .post(
        `${API_CONST.API_URL}/changepassword/${userId}/${token}`,
        { password }
      )
      .then(res => res)
      .catch(err => console.warn("ERROR FROM SERVER UPDATING PASSWORD:", err))
    this.setState({ submitted: !this.state.submitted })
  }

  render() {
    const { submitted } = this.state

    return (
      <UpdatePasswordStyles>
        <h3 style={{ paddingBottom: "1.25rem" }}>Update your password</h3>
        {submitted ? (
          <div className="reset-password-form-sent-wrapper">
            <p>Your password has been saved.</p>
            <Link to="/" className="ghost-btn">
              Sign back in
            </Link>
          </div>
        ) : (
            <div className="reset-password-form-wrapper">
              <form
                onSubmit={this.updatePassword}
                style={{ paddingBottom: "1.5rem" }}
              >
                <GhostInput
                  onChange={this.handleChange("password")}
                  value={this.state.password}
                  placeholder="New password"
                  type="password"
                />
                <GhostInput
                  onChange={this.handleChange("confirmPassword")}
                  value={this.state.confirmPassword}
                  placeholder="Confirm password"
                  type="password"
                />

                <button className="btn btn-dark btn-lg btn-block">
                  Update password
              </button>
              </form>
            </div>
          )}
      </UpdatePasswordStyles>
    )
  }
}

ChangePassword.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}

export default ChangePassword;
