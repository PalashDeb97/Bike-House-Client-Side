import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../shared/Footer/Footer';

const ExploreCard = () => {

    const {user} = useAuth();

    let {id} = useParams()
    const [booking, setBooking] = useState([]);
    const [singleDetails, setBookingNew] = useState({});

    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect( () => {
        fetch('https://intense-peak-26637.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBooking(data))
    },[]);

    useEffect( () => {
        const fullDetails = booking.find((detail) => detail._id === id);
        setBookingNew(fullDetails)
    }, [booking]);




    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const booking = {
            ...data,
            productname: singleDetails?.name,
            price: singleDetails?.price
        }
        console.log(booking);
        axios.post('https://intense-peak-26637.herokuapp.com/booking', booking)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    setBookingSuccess(true);
                    reset();
                }
            })
    };




    return (
        <> 
        <div className="container mb-5 py-lg-5 px-5">
            <div>
                <h3 className="text-center mb-5 fw-bold">BOOKING NOW YOUR FAVOURIT PRODUCT</h3>
            </div>
            
            {
                bookingSuccess && <div class="alert alert-info" role="alert"> Booking Success  </div>
            }
            
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-floating mb-3">                                                        
                    <input {...register("productname")} defaultValue={singleDetails?.name} className="form-control" disabled/>
                    <label for="floatingInput">Product Name</label>
                </div>
                
                <div className="form-floating mb-3">                                                        
                    <input {...register("name")} defaultValue={user?.displayName} className="form-control" />
                    <label for="floatingInput">Enter Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input {...register("email")} defaultValue={user?.email} className="form-control" />
                    <label for="floatingInput">Enter Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" {...register("number")} className="form-control" />
                    <label for="floatingInput">Phone Number</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" {...register("price")} defaultValue={singleDetails?.price} className="form-control" disabled/>
                    <label for="floatingInput">Product Price</label>
                </div>
                
                <div className="">
                    <input className="btn btn-danger text-light py-2 px-4" type="submit" />
                </div>
            </form>
        </div>
        
        <Footer></Footer>
        </>
    );
};

export default ExploreCard;