import React from 'react';
import { Figure } from 'react-bootstrap';

const FigureImages = ({caption, src}) => {
    const pic = `assets/${src}.png`;
    return (
        <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    // src="assets/logo2.png" 
                    src= {pic}
                />
                <Figure.Caption>
                {caption}
                </Figure.Caption>
            </Figure>   
        );
}

export default FigureImages