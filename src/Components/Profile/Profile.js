import { Button } from "bootstrap";
import React, { Component } from "react";
import {Link, Redirect} from 'react-router-dom'

export default class SignUp extends Component {
    constructor(props){
        super(props)
        let token= localStorage.getItem('auth-token')?localStorage.getItem('auth-token'):''
        this.state={
            user_token : token,
            isLogin: token.length> 1? true :false,
        }
    }
    logOut = ()=>{
        localStorage.removeItem('auth-token')
        this.setState({
            isLogin:false
        })
    }
    render () {
        if (!this.state.isLogin) return <Redirect to='/'/>
        else 
        return (
            <div>
                <button onClick={()=>{this.logOut()}}>logout</button>
                <h1>Profile</h1>
            </div>
        )
    }
}
