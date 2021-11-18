import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {

    const {user} = useAuth();

    const [myOrders, setMyOrders] = useState();

    useEffect( () => {
        const url = `https://intense-peak-26637.herokuapp.com/booking?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    },[])


 
    return (
        <div className="mx-4">
            <h3 className="mb-5">MY ORDERS : { myOrders?.length }</h3>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myOrders?.map(order => (
                            <tr>
                                <td>{order?.productname}</td>
                                <td>{order?.name}</td>
                                <td>{order?.number}</td>
                                <td>{order?.email}</td>
                                <td>{order?.price}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

        </div>
    );
};

export default MyOrders;