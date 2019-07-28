import React from 'react';
import {Form, Col,Row, Container, Figure, Button, DropdownButton, Dropdown, Toast, Alert } from 'react-bootstrap';
const ClientForm = () => {
    return (
        <Container  className="client-form">
        <Row>
            <Col>
            <div class="text-center">
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="assets/logo2.png" 
                                />
                                <Figure.Caption>
                                    We stand by what we believe in...
                                </Figure.Caption>
                                </Figure>   
                            </div></Col>
            <Col xs={6}>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>

                    <DropdownButton variant="info" id="dropdown-item-button" title="Select A Location">
                        <Dropdown.Item as="button">Maple Grove</Dropdown.Item>
                        <Dropdown.Item as="button">St. Louis Park</Dropdown.Item>
                        <Dropdown.Item as="button">Eden Prairie</Dropdown.Item>
                    </DropdownButton>
                  <Alert variant="light">
                  <p>We will contact you when your order is done..</p>
                  </Alert>
                    <Button variant="outline-info" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col></Col>
        </Row>
        </Container>
         
     

    );
}
 
export default ClientForm;