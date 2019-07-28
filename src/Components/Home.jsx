import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Figure, Button, Form, FormControl} from 'react-bootstrap'
import './Home.css';
import CustomCards from './CustomCards.js';

class Home extends Component {
    render() { 
        return (
            <Container>
                <Jumbotron> 
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
                            </div>
                        {/* <Col> <CustomCarousel /></Col> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                        <hr className="my-4" />
                            <h2>Welcome to Momo</h2>
                            <p>The best in town!! There we said it...</p>
                            
                            <Form>
                            </Form>
                            <Form inline>
                                <FormControl type="text" placeholder="Email Address" className="mr-sm-3" />
                                <Link to="/about">
                                    <Button variant="outline-info">Subscribe</Button>
                                </Link>
                            </Form>
                        </Col>
                        <Col md="auto"></Col>
                    </Row>
                </Jumbotron>  
                
                <CustomCards />
            </Container>
            );
    }
}
 
export default Home;