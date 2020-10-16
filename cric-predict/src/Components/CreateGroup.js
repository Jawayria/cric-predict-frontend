import React from 'react';
import '../Stylesheets/App.css';
import axios from 'axios';
import {Button, Modal, Form, Row, Col}  from 'react-bootstrap';


export default class CreateGroupsComponent extends React.Component  {

      constructor(){
        super();
        this.state = {
            name: '',
            privacy: 'public',
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value, [event.target.privacy]: event.target.value});
        console.log(event.target.value)
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:8000/api/group/', {"name": this.state.name, "privacy": this.state.privacy},{
        headers: {
            'Authorization': "Bearer "+window.localStorage.getItem('access_token')
        }
        })
        .then(res => {
            alert("Group Created Successfully");
        }).catch(error => {
            alert(error);
        });
        this.setState ( {
            name: '',
            privacy: '',
            showHide: !this.state.showHide
        })
    };

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
                                <Form.Label  column sm="4">Example select</Form.Label>
                                <Col sm="8">
                                <Form.Control as="select" column sm="8" value={this.state.privacy} onChange={this.handleChange} name="privacy" placeholder="Privacy">
                                      <option value="public">public</option>
                                      <option value="private">private</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>
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
