import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';


export default class MemberListComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
        matches: ['match1', 'match2']
    }
  }

  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Group Members</h3>
            <ul className="list-group join-group">
            {
                this.state.matches.map((match => (
                 <div className="card group-card">
                    <div className="card-body">
                        <div className="row">
                              <h5 className="card-title black-text">{match} </h5>
                        </div>
                    </div>
                 </div>
                )))
            }
            </ul>
      </div>
  </div>
     );
  }
 }
