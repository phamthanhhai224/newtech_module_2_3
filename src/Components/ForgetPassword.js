import React, { Component } from 'react';

class ForgetPassword extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        // onChange={(e) => {
                        // this.setState({ name: e.target.value });
                        // }}
                        type="text"
                        className="form-control"
                        placeholder="full name"
                        //value={this.state.name}
                        name="fullName"
                    />
                    <button className="forget-password"> Submit</button>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;