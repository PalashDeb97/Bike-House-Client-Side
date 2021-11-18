import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const LogIn = () => {
    const {logInWithGoogle, handleLogIn, handleEmailChange, handlePasswordChange, error, bookingSuccess} = useAuth();
    
    return (
        <div>
            <div className="">
            <Container className="d-lg-flex justify-content-lg-center">
                <Form onSubmit={handleLogIn}  className="mt-5 ms-5 me-5">

                {
                    bookingSuccess && <div class="alert alert-info " role="alert"> LogIn Successful  </div>
                }
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange}  type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={ handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button className="btn btn-danger" variant="danger" type="submit">
                        Submit
                    </Button>
                    <p className="my-4">New around here? 
                        <Link className="text-decoration-none text-danger fw-bold" to="/register"> Register</Link>
                    </p>
                    
                    
                    
                </Form>
            </Container>
            </div>
                    <p className="text-center">- Orders Login -</p>
            <div className="d-flex justify-content-center mb-5">
               <button onClick={logInWithGoogle}  className="btn btn-outline-danger">Register With Google</button>
            </div>
        </div>
    );
};

export default LogIn;