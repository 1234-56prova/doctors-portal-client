import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AvailableAppointment = ({date, setDate}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/1234-56prova/data/main/slots.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
           <p style={{color: '#19D3AE'}} className='text-center text-xl'>Avalaible Appointments on {format(date, 'PP')} </p> 
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default AvailableAppointment;