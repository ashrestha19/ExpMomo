
import React from 'react';
import { Card, CardDeck, Button} from 'react-bootstrap';
import Carousel1 from '../images/pex-1.jpg'
import Carousel2 from '../images/pex-2.jpg'
import Carousel3 from '../images/pex-3.jpg'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomCards = () => {
    return (  
<CardDeck>
        <Card border="info">
            <Card.Img variant="top" src={Carousel1}/>
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
        <Card>
        <Card.Img variant="top" src={Carousel2}/>
            <Card.Body>
            <Card.Title>PT Momo</Card.Title>
            <Card.Text>
            Consists of 70% Turkey and 30% Pork. Sorry we don't grind pork and turkey, we thought about it but NO.
                    We still make our own wrapper for these.
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
        <Card border="success">
        <Card.Img variant="top" src={Carousel3}/>
            <Card.Body>
            <Card.Title>Vegie Momo</Card.Title>
            <Card.Text>
                Our dear Vegie people, we got your back... 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
            <Button variant="outline-info" size="sm" disabled>Coming Soon..</Button></small>
            </Card.Footer>
        </Card>
    </CardDeck>


    );
        }
 
export default CustomCards;