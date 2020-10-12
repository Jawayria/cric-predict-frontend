import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';

class FormComponent extends React.Component {

    render(){
      return (
        <div className="container form-container" >
        <div className="form">
        <h1> Lets Get Started! </h1>
        <Tabs  id="controlled-tab-example">
          <Tab eventKey="login" title="Login">
            <LoginForm />
          </Tab>
          <Tab eventKey="sign up" title="Sign up">
             <SignupForm />
           </Tab>
        </Tabs>
        </div>
    </div>

      );
    }
}

export default FormComponent;
