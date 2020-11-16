import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import {Button}  from 'react-bootstrap';
import {Redirect, Link} from "react-router-dom";
import LeaderBoard from "./LeaderBoard";
import Predictions from "./Predictions";
import TodaysMatches from "./TodaysMatches";
import LeagueMatches from "./LeagueMatches";
import jwt from "jsonwebtoken";

export default class LeagueDashboardComponent extends React.Component
{
        constructor(props)
        {
            super(props);
            this.state = {
                league : props.location.league_obj.league,
            }
        }

        render (){
            if(localStorage.getItem('access_token'))
            {
                const token = localStorage.getItem('access_token');
                var decodedToken=jwt.decode(token, {complete: true});
                var dateNow = new Date();

                if(decodedToken.payload.exp < dateNow.getTime()/1000){
                    return (<Redirect to="/login" />);
                }
            }
            return (
                <div className='image-background'>
                   <div className="container group-container" >
                        <div className="background">
                            <h1> {this.state.league.name} </h1>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row">
                                        <LeaderBoard />
                                        <Predictions />
                                    </div>
                                    <TodaysMatches league_id={this.state.league.id}/>
                                </div>
                                <div className="col-sm-8">
                                    <LeagueMatches league_id={this.state.league.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
          }
}
