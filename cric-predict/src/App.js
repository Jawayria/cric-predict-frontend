import React from 'react';
import './Stylesheets/App.css';
import Home from './Components/Home.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Rules from "./Components/Rules";
import Leagues from "./Components/Leagues";
import Authentication from "./Components/Authentication";
import Footer from "./Components/Footer";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rules" component={Rules}/>
          <Route exact path="/leagues" component={Leagues}/>
          <Route exact path="/login" component={Authentication}/>

        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;



