import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const DeleteProduct = () => {

    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [allProducts, setAllProducts] = useState([]);
    useEffect( () => {
        fetch('https://intense-peak-26637.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [] )


    const handleDeleteProduct = id => {
        const url = `https://intense-peak-26637.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.deletedCount) {
                    setBookingSuccess(true);
                    const remaining = allProducts.filter( product => product._id !== id);
                    setAllProducts(remaining);
                }

            })
    }


    return (
        <Container>
            <div>
                <h1 className="text-center mb-5">DELETE ANY PRODUCTS</h1>
            </div>
               
            {
                bookingSuccess && <div class="alert alert-info " role="alert"> Successful  </div>
            }
            
            <div className="mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        allProducts.map(product => 
                            
                            <div className="col">
                                <div className="card shadow border-0">
                                    <img src={product?.image} className="card-img-top" alt="" />
                                    <div className="card-body ">
                                        <h4 className="card-title fw-bold text-center">{product?.name}</h4>
                                        <ul className="list-group list-group-flush ">
                                            <li className="list-group-item">Engine : {product?.engine} </li>
                                            <li className="list-group-item">Top Speed : {product?.speed} </li>
                                            <li className="list-group-item">Mileage : {product?.mileage} </li>
                                            <li className="list-group-item">Price in BDT : {product?.price} </li>
                                        </ul>
                                        <div className="text-center mt-2">
                                            <button onClick={() => handleDeleteProduct(product?._id)} className="btn btn-danger text-light">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default DeleteProduct;