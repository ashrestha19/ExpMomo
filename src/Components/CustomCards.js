
import React from 'react';
import { Card, CardDeck, Button, Container, Row, Col} from 'react-bootstrap';
import pex1 from '../images/pex-1.jpg';
import pex2 from '../images/pex-2.jpg';
import pex3 from '../images/pex-3.jpg'
import pex4 from '../images/pex-4.jpg'
import pex5 from '../images/pex-5.jpg';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomCards = () => {

    const style = {
        width: "20em"
    }

    return (  
<Container>
        <CardDeck>
                <Card border="info" >
                    <Card.Img variant="top" src={pex1}/>
                    <Card.Body>
                        <Card.Title>Chicken Momo</Card.Title>
                        <Card.Text>
                            Consists of 100% chicken in proportion of 90% fat free. We grind our meat and make our own 
                            wrapper. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                    <Link to="/clientform">
                        <Button variant="outline-info" size="sm">Order Now</Button>
                        </Link>
                    </small>
                    </Card.Footer>
                </Card>

                <Card >
                <Card.Img variant="top" src={pex2}/>
                    <Card.Body>
                    <Card.Title>Chiken/Pork Momo</Card.Title>
                    <Card.Text>
                    Consists of 70% Chicken and 30% Pork. Sorry we don't grind pork, we thought about it but NO.
                            We still make our own wrapper.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                    <Link to="/clientform">
                        <Button variant="outline-info" size="sm">Order Now</Button>
                        </Link>
                        </small>
                    </Card.Footer>
                </Card>
                <Card border="success" >
                <Card.Img variant="top" src={pex3}/>
                    <Card.Body>
                    <Card.Title>Veggie Momo</Card.Title>
                    <Card.Text>
                        Our dear Veggie people, we got your back... 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                    <Button variant="outline-info" size="sm" disabled>Coming Soon..</Button></small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <hr />
            <CardDeck>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm="4">              
                        <Card border="info">
                            <Card.Img variant="top" src={pex4}/>
                                <Card.Body>
                                <Card.Title>Future Event</Card.Title>
                                <Card.Text>
                                Sometimes it is wise to let us know ahead, If you plan on hosting an event.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">
                                <Link to="/clientform">
                                    <Button variant="outline-info" size="sm">Order Now</Button>
                                    </Link>
                                    </small>
                                </Card.Footer>
                            </Card>
                            </Col>
                            <Col sm="4">
                            <Card border="success">
                            <Card.Img variant="top" src={pex5}/>
                                <Card.Body>
                                <Card.Title>Momo Achar</Card.Title>
                                <Card.Text>
                                    Tomato Achar fresh from the garden when in season..
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">
                                <Button variant="outline-info" size="sm" disabled>Learn More...</Button></small>
                                </Card.Footer>
                            </Card>
                </Col>
                <Col  sm="2"></Col>
                </Row>
            </CardDeck>
  </Container>

    );
        }
 
export default CustomCards;