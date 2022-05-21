import { format } from 'date-fns';
import Loading from '../../Authentication/Loading/Loading'
import React, { useState } from 'react';
import BookModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Service from '../Service/Service';

const AvailableAppointment = ({date, setDate}) => {
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP')
    const {data: services, isLoading, refetch} = useQuery('available', ()=> fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div>
           <p style={{color: '#19D3AE'}} className='text-center text-xl'>Avalaible Appointments on {format(date, 'PP')} </p> 
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                services.map(service => <Service setTreatment={setTreatment} service={service}></Service>)
            }
        </div>
        {treatment && <BookModal date={date} setTreatment={setTreatment} treatment={treatment} refetch={refetch} ></BookModal>}
        </div>
    );
};

export default AvailableAppointment;