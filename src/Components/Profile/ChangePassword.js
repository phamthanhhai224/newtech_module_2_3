import React, { Component } from 'react';

class ChangePassword extends Component {
    render() {
        return (
            <div className="">
               <div className="form-group">
                    <label>Old password</label>
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
                </div>
                <div className="form-group">
                    <label>New password</label>
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
                </div>
            </div>
        );
    }
}

export default ChangePassword;