import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import private_icon from './private.jpg';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class UserGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
        league_id: this.props.league_id,
        matches: ['match1', 'match2', 'match3', 'match4', 'match5', 'match6','match7']
    };
  }

  async componentDidMount() {
    console.log(this.state.league_id);
    const response = await axios.get('http://localhost:8000/api/contest/league_matches/'+this.state.league_id+"/",{
        headers: {
        'Authorization': "Bearer "+window.localStorage.getItem('access_token')
        }
    })
    const matches_list = response.data
    console.log(matches_list)

    this.setState({matches: matches_list})
  }


  render() {
  return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-style">Matches</h3>
                    <div className="row user-group">
                         {
                              this.state.matches.map((match) => (
                              <div className="col-sm-12">
                                <a href="#">
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <h5 className="card-title black-text">{match}</h5>
                                        </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                                </a>
                              </div>))
                         }
                    </div>
            </div>
        </div>
  );
  }
 }
