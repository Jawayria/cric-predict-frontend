import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import logo from '../logo.png';

function Header() {
  return (
    <header>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <img src={logo} className="App-logo" alt="logo" />
            <HeaderMenu />
        </nav>
    </header>
  );
}

export default Header;
