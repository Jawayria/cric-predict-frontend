import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';


export default class MemberListComponent extends React.Component  {

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
    group_member_ids: [...this.props.group_members],
    filtered_members:[],
    group_members: [],
    };
  }

  filterMemberList = async (event) => {
      this.setState({filtered_members:this.state.members.filter(member => member.toLowerCase().includes(event.target.value.toLowerCase()))});
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8000/api/user/list/' ,{
    headers: {
    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
    }
    });
    const users_list = response.data
    console.log(users_list)

    users_list.filter((user) => this.state.group_member_ids.includes(user.id));
    this.setState({group_members: [...users_list], filtered_members:[...users_list]});
}

  render() {
  return (
  <div className="card" >
      <div className="card-body">
         <h3 className="text-style"> Group Members</h3>
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
                <li className="list-group-item"> {member.username} </li>
                ))
            }
            </ul>
      </div>
  </div>
     );
  }
 }
