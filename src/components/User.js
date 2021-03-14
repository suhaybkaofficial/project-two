import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
import './Home.css'
import './commonStyle.css'
import { Router, Route, Link } from 'react-router-dom'
import NavbarLoggedIn from './NavbarLoggedIn'
const authUser = currentUser();
console.log(authUser.email)
export default class User extends Component {
    componentDidMount(){
        if(typeof authUser.email == 'undefined'){
            this.props.history.push("/Login")
        }
    }
    constructor(props){
        super(props);
        this.state = {
            authUser:authUser
        }
    }
    render() {
        return (
            <>
             <NavbarLoggedIn />
                <h4 className="text-center text-primary pt-4">
                    Your Email Is: {this.state.authUser.email}
                </h4>
            </>
        )
    }
}
