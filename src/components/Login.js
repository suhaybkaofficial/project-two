import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
const authUser = currentUser();
console.log(authUser.email)
export default class Login extends Component {
    componentDidMount(){
        if(typeof authUser.email == 'undefined'){
            this.props.history.push("/Login")
        }
        else{
            this.props.history.push("/Home")

        }
    }
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            surname:'',
            email:'',
            role:'',
            password:'',
            confirmpassword:'',
            authUser:authUser
        }
    }
    login = (e) =>{
        e.preventDefault();
        let authUser = {
            email:this.state.email,
            password:this.state.password
        }
        localStorage.setItem('authUser',JSON.stringify(authUser));
        this.setState({
            email:'',
            password:'',
        })
        window.location.href = "/home"
    }
    render() {
        return (
            <div>
            <div className="Signup">
           <h2 className ="text-center text-primary pt-4" >
               Login Form
           </h2>
           
           {/* Signup Form */}
           <div className="col-md-8 offset-md-2">
  <form>
           
            
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"   value={this.state.email} onChange={event => this.setState({email: event.target.value})} required/>
            </div>
            
            <div class="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  value={this.state.password} onChange={event => this.setState({password: event.target.value})} required/>
            </div>
            <div class="justify-content-center text-center">
            <button  className="btn btn-primary btn-block" onClick={this.login} disabled={!this.state.email || !this.state.password }>Login </button>
            </div>
            </form>
            <div class="justify-content-center text-center pt-4">
            <a className="btn btn-outline" href="/Signup">Not Registered | Create an account</a> <br />
            <a className="btn btn-outline" href="/Forgot">Forgot Password</a>
            </div>
            </div>
           {/* Signup Form */}
        </div>
        </div>
        )
    }
}
