import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const [bookingSuccess, setBookingSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://intense-peak-26637.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    setBookingSuccess(true);
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="container mb-5 pb-lg-5 px-5 ">
                <div>
                    <h3 className="text-center mb-5 fw-bold">ADD A PRODUCT</h3>
                </div>
                
            {
                bookingSuccess && <div class="alert alert-info" role="alert"> Product Add  Successful  </div>
            }
            
                <form onSubmit={handleSubmit(onSubmit)} >
                    
                    <div className="form-floating mb-3">                                                        
                        <input {...register("name")} className="form-control" />
                        <label for="floatingInput">Product Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input {...register("engine")} className="form-control" />
                        <label for="floatingInput">Engine</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input {...register("speed")} className="form-control" />
                        <label for="floatingInput">Top Speed</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input {...register("mileage")} className="form-control" />
                        <label for="floatingInput">Mileage</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" {...register("price")} className="form-control" />
                        <label for="floatingInput">Price</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input {...register("image")} className="form-control" />
                        <label for="floatingInput">Image Url</label>
                    </div>
                    
                    <div className="">
                        <input className="btn btn-danger text-light py-2 px-4" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;