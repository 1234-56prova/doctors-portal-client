import React from 'react';
import chair from './../../../images/chair.png'
const Banner = () => {
    return (
        <div className="background-img hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your new smile starts</h1>
                    <h1 className='text-5xl font-bold'>Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button style={{backgroundColor: '#0FCFEC', border: '#0FCFEC'}} className="uppercase text-white font-bold btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;