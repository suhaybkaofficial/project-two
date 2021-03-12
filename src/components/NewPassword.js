import React, { Component } from 'react'
import './Home.css'
import { Router, Route, Link } from 'react-router-dom'
export default class NewPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password:'',
            confirmpassword:''
        }
    }
    reset = (e) => {
        e.preventDefault();
        alert("Successfully Changed Your Password")
        this.props.history.push("/Login")
    }
    render() {
        return (
            <div>
            <div className="Signup">
           <h2 className ="text-center text-primary pt-4" >
               Reset Your Password
           </h2>
           
           {/* Signup Form */}
           <div className="col-md-8 offset-md-2">
  <form>
           
            
  <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  value={this.state.password} onChange={event => this.setState({password: event.target.value})} required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  value={this.state.confirmpassword} onChange={event => this.setState({confirmpassword: event.target.value})} required/>
                </div>
            <div class="justify-content-center text-center">
            <button  className="btn btn-primary btn-block" onClick={this.reset} disabled={!this.state.password || !this.state.confirmpassword || this.state.password.length <=7 || this.state.password !== this.state.confirmpassword }>Reset Password </button>
            </div>
            </form>
           
            </div>
           {/* Signup Form */}
        </div>
        </div>
        )
    }
}
