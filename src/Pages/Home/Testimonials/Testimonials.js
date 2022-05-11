import React from 'react';
import quote from '../../../icons/quote.svg'
const Testimonials = () => {
    return (
        <div className='mt-5 grid grid-cols-1 lg:grid-cols-3'>
            <div className='m-4'>

                <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                <h2 className='text-3xl'>What our patients say?</h2>

            </div>
            <div className='quote' >
                <img src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonials;