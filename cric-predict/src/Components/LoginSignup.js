import React from 'react';
import '../Stylesheets/App.css';
import Header from './Header.js';
import Form from './Form.js';
import Image from './bg1.jpg';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function LoginSignup() {
  return (
    <div class= 'form-container image-background'>
        <Header />
        <div>
            <Form />
        </div>
    </div>
  );
}

export default LoginSignup;
