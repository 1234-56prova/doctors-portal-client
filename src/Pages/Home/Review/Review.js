import React from 'react';
import people1 from '../../../images/people1.png'
const Review = () => {
    return (
        <div className='m-2 p-4 w-96 bg-base-100 rounded-lg shadow-xl'>
            <div>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='display-flex'>
                <div>
                    <img src={people1} alt="" />
                </div>
                <div className='display-flex'>
                    <p>Winson Herry</p>
                    <p>California</p>
                </div>
            </div>
        </div>
    );
};

export default Review;