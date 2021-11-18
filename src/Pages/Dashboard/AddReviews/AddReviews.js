import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const AddReviews = () => {

    const {user} = useAuth();

    const [bookingSuccess, setBookingSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const addReview = {
            ...data,
            name: user?.displayName
        }
        console.log(addReview);
        axios.post('https://intense-peak-26637.herokuapp.com/reviews', addReview)
            .then(res => {
                console.log(res);
                setBookingSuccess(true);
                reset();
            })
    };

    return (
        <div>
            <div className="container mb-5 pb-lg-5 px-5 ">
                <div>
                    <h3 className="text-center mb-5 fw-bold">ADD A REVIEW</h3>
                </div>
                
            {
                bookingSuccess && <div class="alert alert-info " role="alert"> Successful  </div>
            }
            
                <form onSubmit={handleSubmit(onSubmit)} >
                    
                    <div className="form-floating mb-3">                                                        
                        <input {...register("name")} defaultValue={user?.displayName} className="form-control" disabled/>
                        <label for="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea {...register("review")} style={{height: '150px'}} className="form-control" />
                        <label for="floatingInput">Enter Your Review</label>
                    </div>
                    
                    <div className="">
                        <input className="btn btn-danger text-light py-2 px-4" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;