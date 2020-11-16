import React, { Component } from "react";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label>Old password</label>
          <input
            type="text"
            className="form-control"
            placeholder="old pass"
            name="oldPass"
          />
        </div>
        <div className="form-group">
          <label>New password</label>
          <input
            type="text"
            className="form-control"
            placeholder="new pass"
            name="newPass"
          />
        </div>
      </div>
    );
  }
}

export default ChangePassword;
