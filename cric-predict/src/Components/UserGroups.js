import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import private_icon from './private.jpg';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';

export default class UserGroupsComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    groups: [],
    filtered_groups: [],
    };
  }

  async componentDidMount() {
    const user_id = window.localStorage.getItem('user_id');
    const response = await axios.get('http://localhost:8000/api/group/user_groups/'+user_id+"/",{
    headers: {
    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
    }
})
    const groups_list = response.data
    console.log(groups_list)

    groups_list.map((group) => (
        group.user_count=group.users.length
    ))
    this.setState({groups: groups_list, filtered_groups:groups_list})
  }

    filterGroupList = async (event) => {
            this.setState({filtered_groups:this.state.groups.filter(group => group.name.toLowerCase().includes(event.target.value.toLowerCase()))});
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
                             <Form.Control type="text" onChange={this.filterGroupList} name="search" placeholder="Search Groups" />
                         </Col>
                    </Form.Group>
                    <div className="row user-group">
                         {
                              this.state.filtered_groups.map((group) => (
                              <div className="col-sm-12">
                                <a href="#">
                                <div className="card group-card">
                                  <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <h5 className="card-title black-text">{group.name} </h5>
                                            <p  className="card-text black-text">&nbsp; &nbsp;({group.privacy})</p>
                                        </div>
                                    </div>
                                    <p className="card-text black-text">{group.user_count} members</p>
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
