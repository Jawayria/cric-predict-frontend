import React from 'react';
import '../Stylesheets/App.css'
import Carousel from "./Carousel";
import UpcomingLeagues from './UpcomingLeagues';
function HomeComponent() {
    return (
        <div>
            <Carousel/>
            <UpcomingLeagues />
        </div>
    );
}

export default HomeComponent;
