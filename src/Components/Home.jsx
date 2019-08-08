import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Button, Form, FormControl} from 'react-bootstrap'
import CustomCards from './CustomCards.js';
import FigureImages from './helper/FigureImages.js'
import './Home.css';

class Home extends Component {
    render() { 
        const clientCap= " We stand by what we believe in...";
        return (
            <Container>
                <Jumbotron> 
                    <Row>
                        <Col>
                            <div class="text-center">
                            <FigureImages caption={clientCap} src="logo2"> </FigureImages>
                            </div>
                        {/* <Col> <CustomCarousel /></Col> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                        <hr className="my-4" />
                        <div className="lead">
                            <h4>Welcome to MoMo</h4>
                            {/* <h2 className="text-info">Welcome to Momo</h2> */}
                            <p>The best in town!! There we said it...</p>
                            </div>
                          
                            <Form inline>
                                <FormControl type="text" placeholder="Email Address" className="mr-sm-3" />
                                <Link to="/about">
                                        <Button variant="outline-info">Subscribe</Button>
                                </Link>
                            </Form>
                            <Form.Text className="text-muted">
                                Subscribe to our Newsletter..
                            </Form.Text>
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