import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {

    
    const {logInWithGoogle, handleNameChange, handleRegister, handleEmailChange,  handlePasswordChange, error , bookingSuccess } = useAuth();
    
    return (
        <div>
            <div className="">
            <Container className="d-lg-flex justify-content-lg-center">
                <Form onSubmit={handleRegister} className="mt-5 ms-5 me-5">
                        
                {
                    bookingSuccess && <div class="alert alert-info " role="alert"> Register Successful  </div>
                }
            
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={ handlePasswordChange} type="password" placeholder="Password" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={ handlePasswordChange} type="password" placeholder="Confirm Password" required/>
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button className="btn btn-danger" variant="danger" type="submit">
                         Register
                    </Button>
                    <p className="my-4">Already Register? 
                        <Link className="text-decoration-none text-danger fw-bold" to="/login"> Log In</Link>
                    </p>
                    
                    
                    
                </Form>
            </Container>
            </div>
                    <p className="text-center">- Orders Register -</p>
            <div className="d-flex justify-content-center mb-5">
               <button onClick={logInWithGoogle} className="btn btn-outline-danger">Register With Google</button>
            </div>
        </div>
    );
};

export default Register;