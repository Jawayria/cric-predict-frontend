import React from 'react';
import '../Stylesheets/App.css';
import {Tabs, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import Carousel from './Carousel.js';

function FormComponent() {

  return (
<div className="container form-container" >
    <div className="form">
    <h1> Lets Get Started! </h1>
    <Tabs  id="controlled-tab-example">
      <Tab eventKey="login" title="Login">
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

export default FormComponent;
