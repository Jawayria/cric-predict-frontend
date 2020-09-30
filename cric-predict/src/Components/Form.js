import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab} from 'react-bootstrap';
import Carousel from './Carousel.js';

//import {Tabs, Tab} from 'react-bootstrap/Tabs'
function Form() {
  return (

<div class="container form" >
    <h1> Lets Get Started! </h1>
  <ul class="nav nav-tabs" id="myForm">
      <li class= 'col-sm-6'><a data-toggle="tab"  href="#one">Login</a></li>
      <li class= 'col-sm-6'><a data-toggle="tab" href="#two">Sign Up</a></li>
      </ul>

    <form action="" method="post">
      <div class="tab-content">
        <div class="tab-pane active" id="one">
        <div class="form-group row" style = {{marginTop: 20+'px'}}>
            <label for="name" class='col-sm-4 col-form-label'>Username</label>
            <input type="text" class="form-control col-sm-7" name="name" id='name' placeholder="Enter Name"/>
        </div>
        <div class="form-group row">
            <label for="password" class='col-sm-4 col-form-label'>Password</label>
            <input type="password" class="form-control col-sm-7" name="password" id='password' placeholder="Enter Password"/>
        </div>
        <div class="form-group  justify-content-center">
            <button type="submit" class="btn btn-success submit-button">Submit</button>
        </div>
        </div>
        <div class="tab-pane" id="two">
        <div class="form-group row" style = {{marginTop: 20+'px'}}>
            <label for="name" class='col-sm-4 col-form-label'>Username</label>
            <input type="text" class="form-control col-sm-7" name="name" placeholder="Enter Name"/>
        </div>
        <div class="form-group row">
            <label for="password" class='col-sm-4 col-form-label'>Password</label>
            <input type="password" class="form-control col-sm-7" name="password" id='password' placeholder="Enter Password"/>
        </div>
        <div class="form-group row">
            <label for="password2" class='col-sm-4 col-form-label'>Confirm Password</label>
            <input type="password" class="form-control col-sm-7" name="password2" id='password2' placeholder="Confirm Password"/>
        </div>
        <div class="form-group justify-content-center">
            <center><button type="submit" class="btn btn-success submit-button">Submit</button></center>
        </div>

        </div>
        </div>
    </form>
</div>

  );
}

export default Form;
