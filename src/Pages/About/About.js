import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';

const About = () => {
    return (
        <>
        <Container>
            <div className=" my-5">
                <h1 className="mb-5 text-center">OUR ABOUT </h1>
                <div className="row">
                    <div className="col-md-6 ">
                        <div >
                            <div className=" mt-lg-5">
                                <p>Bike House started its operations in 1984 as a joint venture between Bike House Cycles (sometimes called Bike House Group, not to be confused with the Hero Group, food company of Switzerland) of India and Bike House of Japan. In June 2012, Hero MotoCorp approved a proposal to merge the investment arm of its parent Bike House Investment Pvt. Ltd. with the automaker. This decision came 18 months after its split from Hero Honda.</p>
                                <p>"Bike House" is the brand name used by the Munjal brothers for their flagship company, Bike House Cycles Ltd. A joint venture between the Bike House Group and Bike House Motor Company was established in 1984 as the Bike House Motors Limited at Dharuhera, India. Munjal family and Honda group both owned 26% stake in the Company.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="img-fluid" src="https://www.motoguzzi.com/mediaObject/motoguzzi-sites/MASTER/bikes/v7-III/v7-III-Stone/main_image/2017/v7-III-Stone_main_image_black_matt/original/v7-III-Stone_main_image_black_matt.jpg" alt="" />
                        </div>
                    </div>
                </div>
                
                
            </div>
        </Container>
        

        <Footer></Footer>
        </>
    );
};

export default About;