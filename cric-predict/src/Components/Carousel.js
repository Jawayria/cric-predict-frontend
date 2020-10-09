import React from 'react';
import '../Stylesheets/App.css'
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';
import Carousel from 'react-bootstrap/Carousel'

function CarouselComponent() {
  return (
  <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100 carousel-image"
        src={slider2}
        alt="First slide"
        />
        <div className="carousel-content">
            <p>This is Dummy text. Just for testing purpose.</p>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100 carousel-image"
        src={slider3}
        alt="Third slide"
        />
        <div className="carousel-content">
            <p>This is Dummy text. Just for testing purpose.</p>
        </div>
    </Carousel.Item>
</Carousel>
  );
}

export default CarouselComponent;