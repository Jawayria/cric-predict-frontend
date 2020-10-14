import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import logo from '../logo.png';
import '../Stylesheets/App.css';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
        <Navbar fixed="top" className="Header">
             <Navbar.Brand className="Title" style={{color:'white'}}>
                 <img alt="" src={logo} className="App-logo" />
                     CricPredict
             </Navbar.Brand>
            <HeaderMenu />
        </Navbar>
  );
}

export default Header;
