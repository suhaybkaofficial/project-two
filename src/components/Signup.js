import React, { Component } from 'react'
import './Signup.css'
export default class signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            surname:'',
            email:'',
            role:'',
            password:'',
            confirmpassword:'',
            successMsg:'',
        }
    }
    handleDropdown = (e) =>{
        this.setState({role:e.target.value});
      }
    signup = (event) =>{
        event.preventDefault();
        /* Form Validation */
        const firstname = this.state.firstname;
        const surname = this.state.surname;
        const email = this.state.email;
        const role = this.state.role;
        const password = this.state.password;
        const confirmpassword = this.state.confirmpassword;

        let userData = {
            firstname:this.state.firstname,
            surname:this.state.surname,
            email:this.state.email,
            role:this.state.role,
            password:this.state.password
        }
        localStorage.setItem('userData',JSON.stringify(userData));
        /* Form Validation */
        this.setState({
            firstname:'',
            surname:'',
            email:'',
            role:'',
            password:'',
            confirmpassword:'',
            successMsg:'Successfully Created an Account',
        })
        setTimeout(
            this.props.history.push("/Login")
            , 3000);

    }
    render() {
        return (
            <div className="Signup">
               <h2 className ="text-center text-primary pt-4" >
                   Signup Form
               </h2>
               
               {/* Signup Form */}
               <div className="col-md-8 offset-md-2">
               <div className="alert alert-success" >
                {this.state.successMsg}
               </div>
      <form>
                <div className="mb-3">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control"  value={this.state.firstname} onChange={event => this.setState({firstname: event.target.value})} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Surname</label>
                    <input type="text" className="form-control"  value={this.state.surname} onChange={event => this.setState({surname: event.target.value})} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"   value={this.state.email} onChange={event => this.setState({email: event.target.value})} required/>
                </div>
                <div className="mb-3">
                <select class="form-select"  >
                value={this.state.role} 
                onChange={this.handleDropdown} 
                <option  value="Student">Teacher</option>
                <option value="Student">Student</option>
                </select>
                </div>
                <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  value={this.state.password} onChange={event => this.setState({password: event.target.value})} required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  value={this.state.confirmpassword} onChange={event => this.setState({confirmpassword: event.target.value})} required/>
                </div>
                <div class="justify-content-center text-center">
                <button  className="btn btn-primary btn-block" onClick={this.signup} disabled={!this.state.firstname || !this.state.surname || !this.state.email || !this.state.password || !this.state.confirmpassword || this.state.password.length <=7 || this.state.password !== this.state.confirmpassword}>Signup </button>
                </div>
                </form>
                <div class="justify-content-center text-center pt-4">
                <a className="btn btn-outline" href="/login">Already have an account</a>
                </div>
                </div>
               {/* Signup Form */}
            </div>

        )
    }
}
