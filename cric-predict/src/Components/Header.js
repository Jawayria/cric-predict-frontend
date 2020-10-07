import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import logo from '../logo.png';
import '../Stylesheets/App.css'

function Header() {
  return (
  <div>
    <header>
        <nav class="navbar navbar-expand-sm fixed-top Header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 class="Title"> CricPredict </h1>
            <HeaderMenu />
        </nav>
    </header>
   </div>
  );
}

export default Header;
