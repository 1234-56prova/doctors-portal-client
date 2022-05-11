import React from 'react';
import doctor from '../../../images/doctor.png'
const Treatment = () => {
    return (
        <div className='bg-img grid grid-cols-1 lg:grid-cols-3'>
            <div className='img'>
                <img src={doctor} alt="" />
            </div>
            <div className='m-3 text-white'>
                <h5>Appointment</h5>
                <h3>Make an appointment Today</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            
            </div>
        </div>
    );
};

export default Treatment;