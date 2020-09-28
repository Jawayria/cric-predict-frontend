import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import logo from '../logo.png';
import '../Stylesheets/App.css'
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';

function Carousel() {
  return (
  <div>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

        <div class="carousel-inner">
            <div class="item active">
                <img src={slider2} alt="Chicago" />
                <div class="carousel-content">
                    <p>This is Dummy text. Just for testing purpose.</p>
                </div>
            </div>

            <div class="item">
                <img src={slider3} alt="New York" />
                <div class="carousel-content">
                    <p>This is Dummy text. Just for testing purpose.</p>
                </div>
            </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    </div>
  );
}

export default Carousel;