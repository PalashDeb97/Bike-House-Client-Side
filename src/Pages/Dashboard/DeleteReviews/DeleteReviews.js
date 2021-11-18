import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const DeleteReviews = () => {

    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [allReviews, setAllReviews] = useState([]);
    useEffect( () => {
        fetch('https://intense-peak-26637.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [] )


    const handleDeleteProduct = id => {
        const url = `https://intense-peak-26637.herokuapp.com/reviews/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.deletedCount) {
                    setBookingSuccess(true);
                    const remaining = allReviews.filter( review => review._id !== id);
                    setAllReviews(remaining);
                }

            })
    }


    return (
        <Container>
            <div>
                <h1 className="text-center my-5">DELETE ANY REVIEWS</h1>
            </div>
               
            {
                bookingSuccess && <div class="alert alert-info" role="alert"> Successful  </div>
            }
            
            <div class="row row-cols-1 row-cols-md-2 g-4 mb-5 ">
                {
                    allReviews.map(review => 
                        <div class="col ">
                            <div class="card border-0 bg-light">
                                <div class="card-body" style={{borderLeft: '3px solid #dc3545'}} >
                                    <p class="card-text text-secondary">{review?.review}</p>
                                    <small className="ms-3 fw-bold text-secondary">- {review?.name}</small>
                                </div>
                                <div className="text-center my-2">
                                    <button onClick={() => handleDeleteProduct(review?._id)} className="btn btn-danger text-light">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </Container>
    );
};

export default DeleteReviews;