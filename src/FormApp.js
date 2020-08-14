import React, { Component } from 'react'
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';
import DogForm from './dogForm';
import CatForm from './catForm';

class Pet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDogPage: false,
      isCatPage: false,
      isClientPage: true,
    }

    this.enableDogPage = this.enableDogPage.bind(this);
    this.enableCatPage = this.enableCatPage.bind(this);
  }

  enableDogPage() {
    this.setState({
      isDogPage: true,
      isClientPage: false,
    })
  }

  enableCatPage() {
    this.setState({
      isCatPage: true,
      isClientPage: false,
    })
  }

  dogPage() {
    return (
      <DogForm />
    )
  }

  catPage() {
    return (
      <CatForm />
    )
  }

  render() {

    let clientComp = (
      <div>
        <Container>
          <Row>
            <Col md={{span: 7, offset: 3}}>
              <Jumbotron>
                <img width={100} src={logo} alt="logo" />
                <h1>New Client/Patient Form</h1>
                <p>Are you or your pet new to our shop? Please fill out this simple form with as much of your information as you can provide, and it will be sent directly to us in preparation for your first appointment.</p>
                <Form>

                  <Form.Group>
                    <h2>Owner Information</h2>
                    <Form.Label>Name</Form.Label>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder='First Name' />
                      </Col>
                      <Col>
                        <Form.Control placeholder='Last Name' />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridTel'>
                      <Form.Label>Telephone</Form.Label>
                      <Form.Control
                        type='telephone'
                        placeholder='Enter phone number' />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId='formGridAddress1'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='1234 Main St.' />
                  </Form.Group>

                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder='Apt, suite, or floor' />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridCity' >
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridState' >
                      <Form.Label>State</Form.Label>
                      <Form.Control as='select'>
                        <option>Choose...</option>
                        <option>WA</option>
                        <option>OR</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridZip' >
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <br/>

                  <h2>Pet Type</h2>
                  <br/>
                  <Container>
                    <Row>
                      <Col>
                        <Button
                          variant='primary'
                          type='submit'
                          size='lg'
                          onClick={this.enableDogPage}
                        >Dog
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant='primary'
                          type='submit'
                          size='lg'
                          onClick={this.enableCatPage}
                        >Cat
                        </Button>
                      </Col>
                    </Row>
                  </Container>

                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );

    return (
      <>
        {this.state.isClientPage ? clientComp : null}
        {this.state.isDogPage ? this.dogPage() : null}
        {this.state.isCatPage ? this.catPage() : null}
      </>
    )
  }
}

export default Pet;