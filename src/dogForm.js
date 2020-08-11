import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';

import React, { Component } from 'react'

class DogForm extends Component {
  render() {
    return (
      <div>
        <br/>
        <Container>
          <Row>
            <Col md={{span: 7, offset: 3}}>
              <Jumbotron>
                <p>Are you or your pet new to our shop? Please fill out this simple form with as much of your information as you can provide, and it will be sent directly to us in preparation for your first appointment.</p>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Group>
                    <h2>Dog Information</h2>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='input'
                      value={name}
                      placeholder='Name'
                      onChange={this.setName}
                    />
                  </Form.Group>

                  <Form.Group controlId='formBirth'>
                    <Form.Label> Birthday</Form.Label>
                    <Form.Control type='date' />
                  </Form.Group>

                  <Form.Row>
                    
                  </Form.Row>

                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DogForm;