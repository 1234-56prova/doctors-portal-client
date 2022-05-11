import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../icons/clock.svg';
import marker from '../../../icons/marker.svg';
import phone from '../../../icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard color='secondary' cardTitle="Openning Hours" img={clock}></InfoCard>
            <InfoCard color='primary' cardTitle="Our locations" img={marker}></InfoCard>
            <InfoCard color='secondary' cardTitle="Contact Ud" img={phone}></InfoCard>
        </div>
    );
};

export default Info;