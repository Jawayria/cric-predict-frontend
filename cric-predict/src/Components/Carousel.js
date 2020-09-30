import React from 'react';
import '../Stylesheets/App.css'
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';

function Carousel() {
  return (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner">
            <div className="item active">
                <img src={slider2} alt="Chicago" />
                <div className="carousel-content">
                    <p>This is Dummy text. Just for testing purpose.</p>
                </div>
            </div>

            <div className="item">
                <img src={slider3} alt="New York" />
                <div className="carousel-content">
                    <p>This is Dummy text. Just for testing purpose.</p>
                </div>
            </div>
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    </div>
  );
}

export default Carousel;