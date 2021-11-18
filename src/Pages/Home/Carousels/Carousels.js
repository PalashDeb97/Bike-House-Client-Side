import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://timelinecovers.pro/facebook-cover/download/ktm-facebook-cover.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://fbcover.com/covers-images/download/duke_bike.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.coverphotosforfb.com/files/covers/1554-honda-cbr-motorcycle.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;