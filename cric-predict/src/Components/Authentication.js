import React from 'react';
import '../Stylesheets/App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import {Tabs, Tab } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import jwt from 'jsonwebtoken'

function AuthenticationComponent() {
        var isExpired = false;
        const token = localStorage.getItem('access_token');
        var decodedToken=jwt.decode(token, {complete: true});
        var dateNow = new Date();

        if(!(decodedToken.exp < dateNow.getTime())){
                return (<Redirect to="/groups" />);
            }
            else {
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
}

export default AuthenticationComponent;
