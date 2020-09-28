import React from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header.js';
import Carousel from './Components/Carousel.js';
import Leagues from './Components/Leagues.js';
function App() {
  return (
    <div>
        <Header />
        <Carousel />
        <Leagues />
    </div>
  );
}

export default App;
