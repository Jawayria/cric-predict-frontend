import React from 'react';
import '../Stylesheets/App.css';
import Header from './Header.js';
import Form from './Form.js';
import Image from './bg1.jpg';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function LoginSignup() {
  return (
    <div className='image-background'>
        <Form />
    </div>
  );
}

export default LoginSignup;
