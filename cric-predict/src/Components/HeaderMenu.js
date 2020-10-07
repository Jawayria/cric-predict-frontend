import React from 'react';
import '../Stylesheets/App.css'

function HeaderMenu() {
  return (
        <ul class='navbar-nav Header-menu'>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Home</a>  </li>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Rules</a>  </li>
            <li class='nav-item Header-item'>  <a class="nav-link" href="#">Leagues</a>  </li>
              <a class="btn-info btn-lg" href="#">Login | Signup</a>
        </ul>
  );
}

export default HeaderMenu;