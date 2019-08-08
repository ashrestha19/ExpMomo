import React, { Component } from 'react';
import { Alert, Container, Image } from 'react-bootstrap';
import pex4 from '../images/pex-4.jpg'

class About extends Component {
    state = {  }
    render() { 
        return (
            <Container className="about-page"> 
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        This is about who we are and what is our story. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        That is how the story of Griha was born.. 
                    </p>
                    </Alert>
                    <Image src={pex4} fluid />
            </Container>
    )};
}
 
export default About;