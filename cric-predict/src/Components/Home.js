import React from 'react';
import '../Stylesheets/App.css'
import Carousel from "./Carousel";
import Leagues from './Leagues';
function HomeComponent() {
    return (
        <div>
            <Carousel/>
            <Leagues />
            <h2>this is HomePage</h2>
        </div>
    );
}

export default HomeComponent;
