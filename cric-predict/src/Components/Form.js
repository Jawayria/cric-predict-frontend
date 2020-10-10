import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import Carousel from './Carousel.js';
import axios from 'axios';


class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value, [event.target.password]: event.target.value, [event.target.check]:event.target.value});
        console.log(event.target.value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/token/', {"username": this.state.username, "password": this.state.password})
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
        this.setState ( {
            name: '',
            password: ''
        })
    };


    render(){
      return (
        <div className="container form-container" >
        <div className="form">
        <h1> Lets Get Started! </h1>
        <Tabs  id="controlled-tab-example">
          <Tab eventKey="login" title="Login">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintext" style={{marginTop: 20+'px'}}>
                    <Form.Label column sm="4">
                        Username
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit"  className="submit-button">
                    Submit
                </Button>
            </Form>
          </Tab>
          <Tab eventKey="sign up" title="Sign up">
            <Form>
                <Form.Group as={Row} controlId="formPlaintext" style = {{marginTop: 20+'px'}}>
                    <Form.Label column sm="4" className="col-form-label">
                        Username
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Username"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Confirm Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button">
                    Submit
                </Button>
            </Form>
           </Tab>
        </Tabs>
        </div>
    </div>

      );
    }
}

export default FormComponent;
