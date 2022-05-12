import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
        </div>
    );
};

export default Reviews;