import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
import './Home.css'
import { Router, Route, Link } from 'react-router-dom'
const authUser = currentUser();
console.log(authUser.email)
export default class NavbarNotLoggedIn extends Component {
  
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Tracker App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto ml-10 text-center">
                        <li className="nav-item">
                        <Link to="/Home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Login" className="nav-link">Login</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}
