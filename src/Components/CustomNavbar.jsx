import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, NavItem, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import About from './About';
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import './Home.css';

class CustomNavbar extends Component {
    render() { 
        return ( 
            <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
                <Navbar.Brand href="/">Chitiz</Navbar.Brand>
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
           // <Container>
            // <Navbar collapseOnSelect bg="light" >
               
            //    <Navbar.Toggle />
            //    <Navbar.Collapse>
            //         <Navbar.Brand>
            //             <Link to="/">Chitiz</Link>
            //         </Navbar.Brand>  
    
            //         </Navbar.Collapse>
            // <button className="navbar-toggler">
            //     <span className="navbar-toggler-icon"></span></button>   
            // <Nav className="justify-content-right" activeKey="/home">
            //     <Nav.Item>
            //     <Nav.Link eventKey="link-1"><FiFacebook /></Nav.Link>
            //     </Nav.Item>
            //     <Nav.Item>
            //         <Nav.Link eventKey="link-2"><FiInstagram /></Nav.Link>
            //     </Nav.Item>
            //     <Nav.Item>
            //         <Nav.Link eventKey="disabled" disabled>
            //             Coming Soon
            //         </Nav.Link>
            //     </Nav.Item>
            // </Nav>

            // </Navbar>

            //</Container>
         );
    }
}
 
export default CustomNavbar;