import React from 'react';
import HeaderMenuComponent from './HeaderMenu.js';
import logo from '../logo.png';
import '../Stylesheets/App.css'

function Header() {
  return (
        <nav className="navbar navbar-expand-sm fixed-top Header">
            <img src={logo} className="App-logo col-sm-1" alt="logo" />
            <h1 className="Title col-sm-1"> CricPredict </h1>
            <HeaderMenuComponent />
        </nav>
  );
}

export default Header;
