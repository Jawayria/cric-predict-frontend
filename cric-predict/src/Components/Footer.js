import React from 'react';
import logo from '../logo.png';
import '../Stylesheets/App.css';


function FooterComponent() {
    return (
<footer className="footer page-footer font-small stylish-color-dark pt-4">

  <div className="container text-center text-md-left">
    <div className="row">
      <div className="col-md-3 mx-auto">
         <img alt="" src={logo} className="App-logo" />

        <h4 className="font-weight-bold mt-3 mb-2">CricPredict</h4>

      </div>
<hr className="clearfix w-100 d-md-none" />

      <div className="col-md-3 mx-auto">

        <h6 className="font-weight-bold mt-3 mb-2">About us</h6>
        <p>Abuthhjfdh jhfjgd jfhhd hjsgdfj jfhgd hfjg  hfgjdf jhgfdg jsdgtyewr ytetyw  re  uytuuyer ttr.</p>
      </div>

      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-3 mx-auto">
       <br/>
        <ul className="list-unstyled">
          <li><a href="#!">Home</a></li>
          <li><a href="#!">How to Play</a></li>
          <li><a href="#!">Upcoming Leagues</a></li>
          <li><a href="#!">Leaderboard</a></li>
        </ul>
      </div>

      <hr class="clearfix w-100 d-md-none" />

      <div class="col-md-3 mx-auto">
        <br/>
        <br/>
        <ul class="list-unstyled list-inline text-center py-2">
            <li class="list-inline-item">
                <h5 class="mb-1">Register for free</h5>
            </li>
            <li class="list-inline-item">
                <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
            </li>
        </ul>
      </div>

    </div>
  </div>

  <hr />

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>

</footer>
    );
}

export default FooterComponent;
