import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Treatment from '../Treatment/Treatment';

const home = () => {
    return (
        <div>
         <Banner></Banner>   
         <Info></Info>
         <Services></Services>
         <DentalCare></DentalCare>
         <Treatment></Treatment>
         <Testimonials></Testimonials>
        </div>
    );
};

export default home;