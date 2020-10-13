import React from 'react';
import '../Stylesheets/App.css'
import { Link} from 'react-router-dom';
import {Navbar, Nav, Button}  from 'react-bootstrap';

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

  );
}

export default HeaderMenuComponent;
