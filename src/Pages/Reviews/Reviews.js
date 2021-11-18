import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Reviews = () => {

    const [allReviews, setAllReviews] = useState([]);
    useEffect( () => {
        fetch('https://intense-peak-26637.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [] )

    return (
        <>
        <Container className="pb-5">
            <div>
                <h1 className="text-center my-5">Reviews</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4 mb-5 ">
                {
                    allReviews.map(review => 
                        <div class="col ">
                            <div class="card border-0 bg-light">
                                <div class="card-body" style={{borderLeft: '3px solid #dc3545'}} >
                                    <p class="card-text text-secondary">{review?.review}</p>
                                    <small className="ms-3 fw-bold text-secondary">- {review?.name}</small>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </Container>
        
        </>
    );
};

export default Reviews;