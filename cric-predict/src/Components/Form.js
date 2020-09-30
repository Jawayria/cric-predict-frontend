import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab} from 'react-bootstrap';
import Carousel from './Carousel.js';

//import {Tabs, Tab} from 'react-bootstrap/Tabs'
function Form() {
  return (

<div className="container form" >
    <h1> Lets Get Started! </h1>
  <ul className="nav nav-tabs" id="myForm">
      <li className= 'col-sm-6'><a data-toggle="tab"  href="#one">Login</a></li>
      <li className= 'col-sm-6'><a data-toggle="tab" href="#two">Sign Up</a></li>
      </ul>

    <form action="" method="post">
      <div className="tab-content">
        <div className="tab-pane active" id="one">
        <div className="form-group row" style = {{marginTop: 20+'px'}}>
            <label for="name" className='col-sm-4 col-form-label'>Username</label>
            <input type="text" className="form-control col-sm-7" name="name" id='name' placeholder="Enter Name"/>
        </div>
        <div className="form-group row">
            <label for="password" className='col-sm-4 col-form-label'>Password</label>
            <input type="password" className="form-control col-sm-7" name="password" id='password' placeholder="Enter Password"/>
        </div>
        <div className="form-group  justify-content-center">
            <button type="submit" className="btn btn-success submit-button">Submit</button>
        </div>
        </div>
        <div className="tab-pane" id="two">
        <div className="form-group row" style = {{marginTop: 20+'px'}}>
            <label for="name" className='col-sm-4 col-form-label'>Username</label>
            <input type="text" className="form-control col-sm-7" name="name" placeholder="Enter Name"/>
        </div>
        <div className="form-group row">
            <label for="password" className='col-sm-4 col-form-label'>Password</label>
            <input type="password" className="form-control col-sm-7" name="password" id='password' placeholder="Enter Password"/>
        </div>
        <div className="form-group row">
            <label for="password2" className='col-sm-4 col-form-label'>Confirm Password</label>
            <input type="password" className="form-control col-sm-7" name="password2" id='password2' placeholder="Confirm Password"/>
        </div>
        <div className="form-group justify-content-center">
            <center><button type="submit" className="btn btn-success submit-button">Submit</button></center>
        </div>

        </div>
        </div>
    </form>
</div>

  );
}

export default Form;
