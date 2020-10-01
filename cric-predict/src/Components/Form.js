import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab} from 'react-bootstrap';
import Carousel from './Carousel.js';

//import {Tabs, Tab} from 'react-bootstrap/Tabs'
function Form() {
  return (

<div className="container form-container" >
    <div className="form">
    <h1> Lets Get Started! </h1>
  <ul className="nav nav-tabs justify-content-center" id="myForm">
      <li className= 'col-sm-6'><a data-toggle="tab"  href="#one">Login</a></li>
      <li className= 'col-sm-6'><a data-toggle="tab" href="#two">Sign Up</a></li>
      </ul>

    <form action="" method="post">
      <div className="tab-content">
        <div className="tab-pane active" id="one">
        <div className="form-group row" style = {{marginTop: 20+'px'}}>
            <div className="col-sm-4">
                <label for="name" className='col-form-label'>Username</label>
            </div>
            <div className="col-sm-8">
                <input type="text" className="form-control" name="name" id='name' placeholder="Enter Name"/>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-4">
                <label for="password" className='col-form-label'>Password</label>
            </div>
            <div className="col-sm-8">
                <input type="password" className="form-control" name="password" id='password' placeholder="Enter Password"/>
            </div>
        </div>
        <div className="form-group  justify-content-center">
            <button type="submit" className="btn btn-success submit-button">Submit</button>
        </div>
        </div>
        <div className="tab-pane" id="two">
        <div className="form-group row" style = {{marginTop: 20+'px'}}>
            <div className="col-sm-4">
                <label for="name" className='col-form-label'>Username</label>
            </div>
            <div className="col-sm-8">
                <input type="text" className="form-control" name="name" placeholder="Enter Name"/>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-4">
                <label for="password" className='col-form-label'>Password</label>
            </div>
            <div className="col-sm-8">
                <input type="password" className="form-control" name="password" id='password' placeholder="Enter Password"/>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-4">
                <label for="password2" className='col-form-label'>Confirm Password</label>
            </div>
            <div className="col-sm-8">
                <input type="password2" className="form-control" name="password2" id='password2' placeholder="Confirm Password"/>
            </div>
        </div>
        <div className="form-group justify-content-center">
            <center><button type="submit" className="btn btn-success submit-button">Submit</button></center>
        </div>

        </div>
        </div>
    </form>
    </div>
</div>

  );
}

export default Form;
