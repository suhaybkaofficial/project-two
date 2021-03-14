import React, { Component } from 'react'
import currentUser from './AuthenticateUser'
import './Home.css'
import { Router, Route, Link } from 'react-router-dom'
import NavbarLoggedIn from './NavbarLoggedIn'
import NavbarNotLoggedIn from './NavbarNotLoggedIn'
const authUser = currentUser();
console.log(authUser.email)
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            authUser:authUser,
            availability:['Busy','Available'],
            place:['Home','On-Campus'],
            rand:'',
            rand1:''
        }
    }
    componentDidMount(){
        let availability = this.state.availability;
        let place = this.state.place;
        let rand = Math.floor(Math.random() * availability.length);
        let rand1 = Math.floor(Math.random() * place.length);
        this.setState({
            rand:rand,
            rand1:rand1
        })
    }
    render() {
        return (
            <>
             {typeof authUser.email !== 'undefined' ? 
             <>
                <NavbarLoggedIn />
                    <h4 className="text-center text-primary pt-4">
                    Email :  
                {
                     this.state.authUser.email
                }
                

               </h4>
               <h4 className="text-center text-dark pt-4">
                    Role :   Teacher
               </h4>
               <h4 className="text-center text-success pt-4">
               Availability :  
                {
                     this.state.availability[this.state.rand]
                }

               </h4>
               <h4 className="text-center text-danger pt-4">
                    Place :  
                {
                     this.state.place.[this.state.rand1]
                }
                

               </h4>
             </>
             :
             <>
             <NavbarNotLoggedIn />
             </>
             }
            </>
        )
    }
}
