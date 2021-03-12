import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import User from './components/User'
import Forgot from './components/Forgot'
import NewPassword from './components/NewPassword'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/User" component={User}/>
          <Route exact path="/Logout" component={Logout}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Forgot" component={Forgot}/>
          <Route exact path="/NewPassword" component={NewPassword}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
