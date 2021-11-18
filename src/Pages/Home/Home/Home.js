import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import About from '../../About/About';
import History from '../../History/History';
import Reviews from '../../Reviews/Reviews';
import Carousels from "../Carousels/Carousels";

const Home = () => {

    const [sliceProducts, setSliceProducts] = useState([]);
    useEffect( () => {
        fetch('https://intense-peak-26637.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setSliceProducts(data))
    }, [] )


    return (
        <div>
            <Carousels></Carousels>

            <Container>
                <div>
                    <h1 className="text-center my-5">PRODUCTS</h1>
                </div>
                <div className="mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            sliceProducts.slice(0,6).map(product => 
                                
                                <div className=" col">
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
                                                <NavLink to={`/explore/${product?._id}`}>
                                                    <button className="btn btn-danger text-light">Booking Now</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </Container>

            <Reviews></Reviews>

            <History></History>
            <About></About>                                
        </div>
    );
};

export default Home;