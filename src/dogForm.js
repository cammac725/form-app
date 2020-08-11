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
                    <Form.Group as={Col} contolId='FormGridBreed'>
                      <Form.Label>Breed</Form.Label>
                      <Form.Control
                        as="select"
                        value={breed}
                        onChange={this.setBreed}
                      >
                        <option>Choose...</option>
                        <option>German Shepherd</option>
                        <option>Dachshund</option>
                        <option>Norwegian Elkhound</option>
                        <option>Redbone</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="FormGridColor"
                    >
                      <Form.Label>Color</Form.Label>
                      <Form.Control placeholder="Enter Color" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="FormGridSex">
                      <Form.Label>Sex</Form.Label>
                      <Form.Check 
                        type="radio"
                        label="Male"
                        name="formHorizRadios1"
                        ids="formHorizRadios1"
                      />
                      <Form.Check 
                        type="radio"
                        label="Female"
                        name="formHorizRadios1"
                        ids="formHorizRadios1"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="FormGridAltered">
                      <Form.Label>Altered</Form.Label>
                      <Form.Check 
                        type="radio"
                        label="Yes"
                        name="formHorizRadios2"
                        ids="formHorizRadios2"
                      />
                      <Form.Check 
                        type="radio"
                        label="No"
                        name="formHorizRadios2"
                        ids="formHorizRadios2"
                      />
                    </Form.Group>
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