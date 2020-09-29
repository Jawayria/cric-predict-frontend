import React from 'react';
import '../Stylesheets/App.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';

function HeaderMenu() {
  return (
        <ul class='navbar-nav Header-menu'>
            <li class='nav-item Header-item'>  <a class="nav-link" href="LoginSignup.js">Home</a>  </li>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Rules</a>  </li>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Leagues</a>  </li>
             <Router> <Link to class="btn-info btn-lg" href="/LoginSignup">Login | Signup</Link></Router>

        <switch>

        </switch>
        </ul>
  );
}

export default HeaderMenu;
