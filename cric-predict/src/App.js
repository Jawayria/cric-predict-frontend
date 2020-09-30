import React from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header.js';
import Carousel from './Components/Carousel.js';
import Leagues from './Components/Leagues.js';
import LoginSignup from './Components/LoginSignup.js';
import Home from './Components/Home.js';
import Rules from './Components/Rules.js';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <Carousel />
        <Leagues />
        <Switch>
            <Route path="/" component={Home} render={() => <Redirect to="./Components/Home"/>} />
            <Route path="/rules" component={Rules} render={() => <Redirect to="./Components/Rules"/>} />
            <Route path="/leagues" component={Leagues} render={() => <Redirect to="./Components/Leagues"/>} />
            <Route path="/login" component={LoginSignup} render={() => <Redirect to="./Components/LoginSignup"/>} />
        </Switch>
    </div>
  );
}

export default App;
