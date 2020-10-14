import React from 'react';
import '../Stylesheets/App.css'
import Carousel from "./Carousel";
import Leagues from './Leagues';
function HomeComponent() {
    return (
        <div>
            <Carousel/>
            <Leagues />
        </div>
    );
}

export default HomeComponent;
