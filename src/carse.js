import React from 'react';
import talents from './images/tal.jpg';
import book from './images/bookss.jpg';
import sports from './images/sp.jpg';
import { Carousel } from 'react-bootstrap';

function PhotoCarousel() {
    return (
        <Carousel > 
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={talents}
                    height="400px"
                    width="300px"
                    alt="First slide"
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>TALENTS DAY</h3>
                    <p>ON 30-07-2024</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={book}
                    height="400px"
                    width="300px"
                    alt="Second slide"
                />
                <Carousel.Caption style={{ color: 'yellow' }}>
                    <h3>BOOK FAIR</h3>
                    <p>ON 5-7-2K24</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sports}
                    height="400px"
                    width="300px"
                    alt="Third slide"
                />
                <Carousel.Caption style={{ color: 'black' }}>
                    <h3>SPORTS DAY</h3>
                    <p>ON 16-07-2024</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default PhotoCarousel;
