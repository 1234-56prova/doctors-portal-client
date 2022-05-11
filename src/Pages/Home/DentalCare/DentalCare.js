import React from 'react';
import doctor from '../../../images/treatment.png';

const DentalCare = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={doctor} class="max-w-md rounded-lg shadow-2xl" />
                <div className='ml-4'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, </h1>
                    <h1 class='text-5xl font-bold'>on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;