import React from 'react';
import './Stylesheets/App.css';
import Home from './Components/Home.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Rules from "./Components/Rules";
import UpcomingLeagues from "./Components/UpcomingLeagues";
import Authentication from "./Components/Authentication";
import Footer from "./Components/Footer";
import Groups from "./Components/Groups";
import GroupDashboard from "./Components/GroupDashboard";
import LeagueDashboard from "./Components/LeagueDashboard";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rules" component={Rules}/>
          <Route exact path="/leagues" component={UpcomingLeagues}/>
          <Route exact path="/login" component={Authentication}/>
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/group_dashboard" component={GroupDashboard} />
          <Route exact path="/league_dashboard" component={LeagueDashboard} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;



