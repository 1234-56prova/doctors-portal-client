import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointment = ({date, setDate}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => {setServices(data) 
            })
    }, [])
    return (
        <div>
           <p style={{color: '#19D3AE'}} className='text-center text-xl'>Avalaible Appointments on {format(date, 'PP')} </p> 
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                services.map(service => <Service setTreatment={setTreatment} service={service}></Service>)
            }
        </div>
        {treatment && <BookModal date={date} setTreatment={setTreatment} treatment={treatment}></BookModal>}
        </div>
    );
};

export default AvailableAppointment;