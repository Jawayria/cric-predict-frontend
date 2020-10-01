import React from 'react';
import HeaderMenuComponent from './HeaderMenu.js';
import logo from '../logo.png';
import '../Stylesheets/App.css'

function Header() {
  return (
  <div>
    <header>
        <nav className="navbar navbar-expand-sm fixed-top Header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Title"> CricPredict </h1>
            <HeaderMenuComponent />
        </nav>
    </header>
   </div>
  );
}

export default Header;
