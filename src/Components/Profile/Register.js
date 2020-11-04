import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Reenter password</label>
                        <input type="password" className="form-control" placeholder="Reenter password" />
                    </div>


                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to={"/sign-in"}>Sign in</Link>
                    </p>
                </form>
            </div>
        );
    }
}