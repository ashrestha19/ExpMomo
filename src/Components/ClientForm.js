import React from 'react';
import {Form, Col,Row, Container, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import  FigureImages  from './helper/FigureImages.js'
import InfoMessage from './helper/InfoMessage';

const ClientForm = () => {
    const clientCap = "We stand by what we believe in...";
    const clientInfo ="We will contact you when your order is done..";
    return (
        <Container className="client-form">
        <Row>
            <Col>
                <div className="text-center">
                    <FigureImages caption={clientCap} src="logo2"> </FigureImages>
                </div>
            </Col>
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

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Quantity And any special request</Form.Label>
                    <Form.Control as="textarea" rows="3"  />
                </Form.Group>

                    <DropdownButton variant="info" id="dropdown-item-button" title="Pickup Location">
                        <Dropdown.Item as="button">Maple Grove</Dropdown.Item>
                        <Dropdown.Item as="button">St. Louis Park</Dropdown.Item>
                        <Dropdown.Item as="button">Eden Prairie</Dropdown.Item>
                    </DropdownButton>            

                <InfoMessage children={clientInfo} ></InfoMessage>               
                <Button  disabled variant="outline-info" type="submit">Submit</Button>
                </Form>
            </Col>
            <Col>
            </Col>
        </Row>
        </Container>
    );
}
 
export default ClientForm;