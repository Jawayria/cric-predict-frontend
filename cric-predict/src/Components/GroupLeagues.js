import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import private_icon from './private.jpg';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class UserGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    leagues: ['league 1', 'league 2', 'league 3', 'league 4'],
    filtered_leagues: ['league 1', 'league 2', 'league 3', 'league 4'],
    };
  }

    filterLeagueList = async (event) => {
            this.setState({filtered_leagues:this.state.leagues.filter(league => league.toLowerCase().includes(event.target.value.toLowerCase()))});
        }


  render() {
  return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-style"> Your Groups</h3>
                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px', color:'white'}}>
                         <Form.Label column sm="2">
                            Search
                         </Form.Label>
                         <Col sm="8">
                             <Form.Control type="text" onChange={this.filterLeagueList} name="search" placeholder="Search Groups" />
                         </Col>
                    </Form.Group>
                    <div className="row user-group">
                         {
                              this.state.filtered_leagues.map((league) => (
                              <div className="col-sm-12">
                                <a href="/group_dashboard">
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <h5 className="card-title black-text">{league} </h5>
                                        </div>
                                    </div>
                                    <p className="card-text black-text">2/10/2020 to 5/11/2020</p>
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
