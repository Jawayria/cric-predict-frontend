import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';


export default class MemberListComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    members: ['member 1', 'member 2', 'member 3', 'member 4'],
    filtered_members:['member 1', 'member 2', 'member 3', 'member 4'],
    };
  }

    filterMemberList = async (event) => {
            this.setState({filtered_members:this.state.members.filter(member => member.toLowerCase().includes(event.target.value.toLowerCase()))});
        }

  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Join Group</h3>
             <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px',color: 'white'}}>
                  <Form.Label column sm="4">
                       Search Member
                  </Form.Label>
                  <Col sm="7">
                        <Form.Control type="text" onChange={this.filterMemberList} name="filter" placeholder="Search" />
                  </Col>
             </Form.Group>
            <ul className="list-group join-group">
            {
                this.state.filtered_members.map((member) => (
                <li className="list-group-item"> {member} </li>
                ))
            }
            </ul>
      </div>
  </div>
     );
  }
 }
