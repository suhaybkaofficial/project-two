import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
import './Home.css'
import { Router, Route, Link } from 'react-router-dom'
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
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
               <h4 className="text-center text-primary pt-4">
                Welcome {this.state.authUser.email} 
                <br/><br/><br/>
                <small>Here is Dashboard Page</small>
               </h4>
           </div>
        )
    }
}
