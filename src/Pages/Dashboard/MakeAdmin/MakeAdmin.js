import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {

    const {bookingSuccess, setBookingSuccess} = useAuth();
    const [email, setEamail] = useState('');

    const handleOnBlur = e => {
        setEamail(e.target.value);
    }

    const handleMakeAdmin = e => {

        const user = { email };
        fetch('https://intense-peak-26637.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setEamail('');
            setBookingSuccess(true)
            console.log(data);
        })

        e.preventDefault();
    }

    return (
        <div className="mx-5 px-5">
            <h2 className="text-center mb-5">Make Admin</h2>
                
            {
                bookingSuccess && <div class="alert alert-info" role="alert"> Successful  </div>
            }
            
            <form onSubmit={handleMakeAdmin}>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" onBlur={handleOnBlur} />
                    <label for="floatingInput">Make Admin Email</label>
                </div>
                <input className="btn btn-danger text-light py-2 px-4" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;