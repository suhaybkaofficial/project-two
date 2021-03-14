import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
import './Home.css'
import { Router, Route, Link } from 'react-router-dom'
import NavbarLoggedIn from './NavbarLoggedIn'

const authUser = currentUser();
console.log(authUser.email)
export default class Dashboard extends Component {
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
                Welcome {this.state.authUser.email} 
                <br/><br/><br/>
                <small>Here is Dashboard Page</small>
               </h4>
           </>
        )
    }
}
