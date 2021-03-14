import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
import './NavbarLoggedIn.css'
import { Router, Route, Link } from 'react-router-dom'
const authUser = currentUser();
console.log(authUser.email)
export default class NavbarLoggedIn extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            authUser:authUser
        }
    }
    render() {
        return (
             <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white p-2">
                    <a className="navbar-brand" href="/">Tracker App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto ml-10 text-center">
                        <li className="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/User" className="nav-link">User</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Logout" className="nav-link">Logout</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
        )
    }
}
