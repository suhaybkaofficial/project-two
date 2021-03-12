import React, { Component } from 'react'
import './Home.css'
import { Router, Route, Link } from 'react-router-dom'
export default class Forgot extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            successMsg:''
        }
    }
    forgot = (e) => {
        e.preventDefault();
        this.setState({
            successMsg:'Reset Password Link Sent To Your Email'
        })
        setTimeout(
            window.location.href = "/NewPassword"
            , 4000);
    }
    render() {
        return (
            <div>
            <div className="Signup">
           <h2 className ="text-center text-primary pt-4" >
               Forgot Your Password
           </h2>
           
           {/* Signup Form */}
           <div className="col-md-8 offset-md-2">
           <div className="alert alert-success" >
                {this.state.successMsg}
               </div>
  <form>
           
            
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"   value={this.state.email} onChange={event => this.setState({email: event.target.value})} required/>
            </div>
            <div class="justify-content-center text-center">
            <button  className="btn btn-primary btn-block" onClick={this.forgot} disabled={!this.state.email  }>Forgot Password </button>
            </div>
            </form>
            <div class="justify-content-center text-center pt-4">
             
            <a className="btn btn-outline" href="/Login">Already Registered</a><br />
            <a className="btn btn-outline" href="/Signup">Not Registered | Create an account</a>
            </div>
            </div>
           {/* Signup Form */}
        </div>
        </div>
        )
    }
}
