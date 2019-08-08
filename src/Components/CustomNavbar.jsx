import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, NavItem, Container} from 'react-bootstrap'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import './Home.css';

class CustomNavbar extends Component {
    render() { 
        return ( 
            <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
                <Navbar.Brand href="/">Griha</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#"><FiFacebook /></Nav.Link>
                        <Nav.Link href="#"><FiInstagram /></Nav.Link>
                        <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Coming Soon
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                
                </Navbar.Collapse>
                </Navbar>
         );
    }
}
 
export default CustomNavbar;