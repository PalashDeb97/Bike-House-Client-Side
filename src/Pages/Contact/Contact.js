import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';

const Contact = () => {
    return (
        <>
        <Container className="mb-5">
            <div className="text-center fw-bold my-5">
                <h1>CALL NOW</h1>
                <p>+0123 0140 4456 4122</p>
            </div>
        </Container>

        <Footer></Footer>
        </>
    );
};

export default Contact;