import React, { Component } from 'react';
import { Alert, Container, Col, Row } from 'react-bootstrap';

class About extends Component {
    state = {  }
    render() { 
        return (
            <Container className="about-page"> 
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                    </Alert>
            </Container>
    )};
}
 
export default About;