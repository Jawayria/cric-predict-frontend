import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';
import {BASE_URL} from '../base_url.js';


export default class CreateGroupsComponent extends React.Component  {

        constructor(){
            super();
            this.state = {
                name: '',
                privacy: 'public',
                unfiltered_users:[],
                selected_users: [],
                filtered_users:[],
                all_users: [],
                showHide : false
            }
        }

        async componentDidMount() {
            const response = await axios.get(BASE_URL+'user/list/',{
            headers: {
                'Authorization': "Bearer "+window.localStorage.getItem('access_token')
            }
            })
            const users_list = response.data
            this.setState({unfiltered_users: users_list, filtered_users:users_list, all_users: users_list})
        }

        handleModalShowHide() {
            this.setState({
                name: '',
                privacy: 'public',
                unfiltered_users: [...this.state.all_users],
                selected_users: [],
                filtered_users: [...this.state.all_users],
                showHide: !this.state.showHide })
        }

        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value, [event.target.privacy]: event.target.value});
        };

        handleSubmit = async (event) => {
            event.preventDefault();
            await axios.post(BASE_URL+'group/', {"name": this.state.name, "privacy": this.state.privacy,
                        "users": this.state.selected_users},{
                        headers: {
                            'Authorization': "Bearer "+localStorage.getItem('access_token')
                        }
            })
            .then( async (res) => {
                const user_id = localStorage.getItem('user_id');
                this.state.selected_users.push(user_id);
                await axios.patch(BASE_URL+'group/'+res.data.id+'/', {"users": this.state.selected_users },{
                headers: {
                    'Authorization': "Bearer "+window.localStorage.getItem('access_token')
                }
                })
                .then ( res => {
                    alert("Group Created Successfully");
                }
                )
            }).catch(error => {
            alert(error);
        });
        this.setState ( {
            name: '',
            privacy: '',
            selected_users:[],
            showHide: !this.state.showHide
        })

        };

        filterUserList = async (event) => {
            this.setState({filtered_users:this.state.unfiltered_users.filter(user => user.username.toLowerCase().includes(event.target.value.toLowerCase()))});
        }


        addMember = user_id => {
            this.state.selected_users.push(user_id)
            this.setState({unfiltered_users: this.state.unfiltered_users.filter(user => !this.state.selected_users.includes(user.id)),
            filtered_users: this.state.filtered_users.filter(user => !this.state.selected_users.includes(user.id))})
        }

      render() {
          return (
                <div>
                        <Button className="create-button text-style" onClick={() => this.handleModalShowHide()}>
                            Create Group
                        </Button>

                        <Modal show={this.state.showHide}>

                            <Form  onSubmit={this.handleSubmit}>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Create Group</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                                        <Form.Label column sm="4">
                                            Group Name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Group Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="forSelectText"  style={{marginTop: 20+'px'}}>
                                        <Form.Label  column sm="4">Privacy</Form.Label>
                                        <Col sm="8">
                                        <Form.Control as="select" column sm="8" value={this.state.privacy} onChange={this.handleChange} name="privacy" placeholder="Privacy">
                                              <option value="public">public</option>
                                              <option value="private">private</option>
                                        </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                                        <Form.Label column sm="4">
                                            Members
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" value={this.state.users} onChange={this.filterUserList} name="members" placeholder="Add Members" />
                                        </Col>
                                    </Form.Group>
                                    <ul className="list-group join-group">
                                    {
                                        this.state.filtered_users.map((user,i) =>
                                        (
                                            <li key={i} className="list-group-item">{user.username} <Button className="join-button"  onClick={() => this.addMember(user.id)}>+</Button></li>
                                        ))
                                    }
                                    </ul>

                                    <Button variant="primary" type="submit"  className="submit-button">
                                        Create
                                    </Button>
                                </Modal.Body>

                            </Form>
                        </Modal>
                </div>

             );

     }
 }
