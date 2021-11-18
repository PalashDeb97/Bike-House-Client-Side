import React from 'react';
import { Container } from 'react-bootstrap';

const History = () => {
    return (
        <Container className="my-5">
            <div className="card mb-3 mx-auto my-5 w-75" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHHKZ95ryr5KTMtGBs2nt5fQCVqRpH90_Yw&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title fw-bold  mb-3">BIKE HOUSE MOTOCORP HISTORY</h4>
                            <p className="card-text">Bike House MotoCorp Limited, formerly Bike House, is an Bangladeshi multinational motorcycle and scooter manufacturer headquartered in Dhaka, Bangladesh. The company is the largest two-wheeler manufacturer in the world, and also in Bangladesh, where it has a market share of about 37.1% in the two-wheeler industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default History;