import React from 'react';
import Service from '../../Service/Service';
import cavity from '../../../images/cavity.png'
import dribble_1 from '../../../images/whitening.png'
import flouride from '../../../images/fluoride.png'
const Services = () => {
    return (
        <div>
            <h2 className='text-center p-2 text-primary'>Our services</h2>
            <h4 className='text-center p-2'>Services We Provide</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service cardBody='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' cardTitle='Fluoride Treatment' img={cavity}></Service>
                <Service cardBody='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' cardTitle='Cavity Filling' img={dribble_1}></Service>
                <Service cardBody='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' cardTitle='Teeth Whitenning' img={flouride}></Service>
            </div>
        </div>

    );
};

export default Services;