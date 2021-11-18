import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-danger pt-5 pb-1 text-light">
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }}>
                        <h3>Bike House</h3>
                        <p className="text-color">The Bike House is a community-based bicycle repair co-op in Washington, DC. Our mission is to build a place where all people can learn about, work on, and enjoy.</p>
                    </Col>
                    <Col  xs={{ order: 'last' }} className="ms-lg-5 ps-lg-5">
                        <h4 className="title-color">Footer Navbar</h4>
                        <Stack gap={3}>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/home"
                            >
                            - Home
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/explore"
                            >
                            - Explore
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/reviews"
                            >
                            - Reviews
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/history"
                            >
                            - History
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/about"
                            >
                            - About
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/contact"
                            >
                            - Contact
                            </NavLink>
                        </Stack>
                    </Col>
                </Row>
                <p className="text-light text-center mt-5">Copyright 2021 by Palash</p>
            </Container>
        </div>
    );
};

export default Footer;