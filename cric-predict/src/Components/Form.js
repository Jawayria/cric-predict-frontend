import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import Carousel from './Carousel.js';

export default class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, {[event.target.password]: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://127.0.0.1:8000/api/user/login/', {
            method: 'POST', mode: 'no-cors',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });

        event.preventDefault();
    }


    render(){
      return (
        <div className="container form-container" >
        <div className="form">
        <h1> Lets Get Started! </h1>
        <Tabs  id="controlled-tab-example">
          <Tab eventKey="login" title="Login">
            <Form onSubmit={this.handleSubmit}>
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

