import React from 'react';
import '../Stylesheets/App.css'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import LoginSignup from './LoginSignup';
import App from '../App';

function HeaderMenuComponent() {
  return (
        <ul class='navbar-nav Header-menu'>
            <li class='nav-item Header-item'>  <Link to='/'> Home</Link>  </li>
            <li class='nav-item Header-item'>  <Link to='/rules'> Rules</Link>  </li>
            <li class='nav-item Header-item'>  <Link to='/leagues'>Leagues</Link>  </li>
            <li><Link to='/login' class="btn-info btn-lg" >Login | Signup</Link></li>

        </ul>
  );
}

export default HeaderMenuComponent;
