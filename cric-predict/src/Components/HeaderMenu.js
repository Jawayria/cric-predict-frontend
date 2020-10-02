import React from 'react';
import '../Stylesheets/App.css'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import LoginSignup from './LoginSignup';
import App from '../App';
import {Navbar, Nav, NavDropdown, Button}  from 'react-bootstrap';

function HeaderMenuComponent() {
  return (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto Header-menu">
	    <Nav.Link className= "Header-item">  <Link to='/'> Home </Link></Nav.Link>
	    <Nav.Link className= "Header-item">  <Link to='/rules'> Rules </Link></Nav.Link>
	    <Nav.Link className= "Header-item">  <Link to='/leagues'> Leagues </Link></Nav.Link>
	    <Button><Nav.Link className= "Header-item">  <Link to='/login'> Login | Signup </Link></Nav.Link></Button>
	</Nav>
    </Navbar.Collapse>

  /*
        <ul className='navbar-nav Header-menu'>
            <li className='nav-item Header-item'>  <Link to='/'> Home</Link>  </li>
            <li className='nav-item Header-item'>  <Link to='/rules'> Rules</Link>  </li>
            <li className='nav-item Header-item'>  <Link to='/leagues'>Leagues</Link>  </li>
            <li className='nav-item Header-item'>  <Link to='/login' className='btn-info btn-lg'> Login | Signup </Link></li>
        </ul>
        */
  );
}

export default HeaderMenuComponent;
