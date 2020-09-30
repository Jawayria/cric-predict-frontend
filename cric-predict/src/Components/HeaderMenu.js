import React from 'react';
import '../Stylesheets/App.css'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Home from '../App';

function HeaderMenuComponent() {
  return (
        <ul class='navbar-nav Header-menu'>
            <li class='nav-item Header-item'>  <Link to='/'> Home</Link>  </li>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Rules</a>  </li>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Leagues</a>  </li>
            <Link to='/LoginSignup' class="btn-info btn-lg" >Login | Signup</Link>

        </ul>
  );
}

export default HeaderMenuComponent;
