import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} = useAuth();

    if (isLoading) {
        return <Button style={{marginLeft: '45%'}} className=" my-5 text-light" variant="danger" >
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                </Button>
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email && admin ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default AdminRoute;