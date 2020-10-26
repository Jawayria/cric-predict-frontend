import React from 'react';
import '../Stylesheets/App.css';
import '../Stylesheets/Group.css';
import CreateGroup from './CreateGroup';
import {Redirect} from "react-router-dom";
import jwt from 'jsonwebtoken';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';


export default class GroupComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
    public_groups: [],
    joined_groups: [],
    filtered_public_groups: [],
    filtered_joined_groups: [],
    };
  }

  async componentDidMount() {
    const user_id = window.localStorage.getItem('user_id');
    const response = await axios.get('http://localhost:8000/api/group/groups_dict/'+user_id+"/",{
    headers: {
    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
    }
    })
    const groups_list = response.data
    console.log(groups_list)

    groups_list['public_groups'].map((group) => (
        group.user_count=group.users.length
    ))

    groups_list['joined_groups'].map((group) => (
        group.user_count=group.users.length
    ))

    this.setState({'public_groups':[...groups_list['public_groups']], 'filtered_public_groups':[...groups_list['public_groups']],
                    'joined_groups': groups_list['joined_groups'], 'filtered_joined_groups':[...groups_list['joined_groups']]})
    }

    filterPublicGroupList = async (event) => {
            this.setState({filtered_public_groups:this.state.public_groups.filter(group => group.name.toLowerCase().includes(event.target.value.toLowerCase()))});
    }

    filterJoinedGroupList = async (event) => {
            this.setState({filtered_joined_groups:this.state.joined_groups.filter(group => group.name.toLowerCase().includes(event.target.value.toLowerCase()))});
    }

    joinGroup = async (users,group) => {
        const user_id = localStorage.getItem('user_id');
        users.push(Number(user_id));
        console.log(users);
        await axios.patch('http://localhost:8000/api/group/'+group.id+'/', {"users": users},{
        headers: {
            'Authorization': "Bearer "+ localStorage.getItem('access_token')
        }
        })
        .then(res => {
            alert("Group Joined Successfully");

        }).catch(error => {
            alert(error);
        });

            this.setState({groups: this.state.public_groups.filter(group => group.id!=group.id),
            filtered_public_groups: this.state.filtered_public_groups.filter(group => group.id!=group.id),
            joined_groups: this.state.joined_groups.push(group)})

    };

  render() {
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
                        <h1> Groups </h1>
                        <div className="row">
                            <div className="col-sm-4">
                                 <CreateGroup />
                                 <div className="card" >
                                  <div className="card-body">
                                     <h3 className="text-style"> Join Group</h3>
                                         <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px',color: 'white'}}>
                                              <Form.Label column sm="4">
                                                   Search Groups
                                              </Form.Label>
                                              <Col sm="7">
                                                    <Form.Control type="text" onChange={this.filterPublicGroupList} name="filter" placeholder="Search" />
                                              </Col>
                                         </Form.Group>
                                        <ul className="list-group join-group">
                                        {
                                            this.state.filtered_public_groups.map((group) => (
                                            <li className="list-group-item"> <b>{group.name}</b> ({group.user_count} members) <Button className="join-button" onClick={() => this.joinGroup(group.users, group)}>+</Button></li>
                                            ))
                                        }
                                        </ul>
                                  </div>
                              </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="text-style"> Your Groups</h3>
                                            <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px', color:'white'}}>
                                                 <Form.Label column sm="2">
                                                    Search
                                                 </Form.Label>
                                                 <Col sm="8">
                                                     <Form.Control type="text" onChange={this.filterJoinedGroupList} name="search" placeholder="Search Groups" />
                                                 </Col>
                                            </Form.Group>
                                            <div className="row user-group">
                                                 {
                                                      this.state.filtered_joined_groups.map((group) => (
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );

  }
}
