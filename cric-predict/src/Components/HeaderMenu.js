import React from 'react';
import '../Stylesheets/App.css'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import LoginSignup from './LoginSignup';
import App from '../App';
import 'react-bootstrap';

function HeaderMenuComponent() {
  return (
        <ul className='navbar-nav Header-menu'>
            <li className='nav-item Header-item'>  <Link to='/'> Home</Link>  </li>
            <li className='nav-item Header-item'>  <Link to='/rules'> Rules</Link>  </li>
            <li className='nav-item Header-item'>  <Link to='/leagues'>Leagues</Link>  </li>
            <li className='nav-item Header-item'>  <Link to='/login' className='btn-info btn-lg'> Login | Signup </Link></li>
        </ul>
  );
}

export default HeaderMenuComponent;
