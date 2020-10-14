import React from 'react';
import '../Stylesheets/App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import {Tabs, Tab } from 'react-bootstrap';

function AuthenticationComponent() {
  return (
    <div className='image-background'>
       <div className="container form-container" >
        <div className="form">
        <h1> Lets Get Started! </h1>
        <Tabs  id="controlled-tab-example">
          <Tab eventKey="login" title="Login">
            <Login />
          </Tab>
          <Tab eventKey="sign up" title="Sign up">
             <Signup />
           </Tab>
        </Tabs>
        </div>
    </div>
    </div>
  );
}

export default AuthenticationComponent;
