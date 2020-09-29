import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab} from 'react-bootstrap';
import Carousel from './Carousel.js';

//import {Tabs, Tab} from 'react-bootstrap/Tabs'
function Form() {
  return (

<div class="container form" style={{marginTop: 11 + 'vmin'}}>
  <ul class="nav nav-tabs" id="myForm">
      <li><a data-toggle="tab"  href="#one">Login</a></li>
      <li><a data-toggle="tab" href="#two">Sign Up</a></li>
      </ul>

    <form action="" method="post">
      <div class="tab-content">
        <div class="tab-pane active" id="one">
          <input type="text" class="form-control" name="name" placeholder="enter name"/>
          <input type="password" class="form-control" name="password" placeholder="enter password"/>
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
        <div class="tab-pane" id="two">
          <input type="text" class="form-control" name="name" placeholder="enter name"/>
          <input type="password" class="form-control" name="password" placeholder="enter password"/>
          <input type="password" class="form-control" name="password2" placeholder="confirm password"/>
          <button type="submit" class="btn btn-success">Submit</button>

        </div>
        </div>
    </form>
</div>

  );
}

export default Form;
