import React from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header.js';
import Carousel from './Components/Carousel.js';
import Leagues from './Components/Leagues.js';
import LoginSignup from './Components/LoginSignup.js';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
        <Header />
        <Carousel />
        <Leagues />
        <Switch>
            <Route path="/leagues" component={Leagues} />
            <Route path="/login" component={LoginSignup} />
        </Switch>
    </div>
  );
}

export default App;
