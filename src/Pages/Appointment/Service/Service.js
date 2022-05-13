import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="service  shadow-xl">
            <div className=" margin-card">
                <h2 style={{ color: '#19D3AE' }} className="card-title">{name}</h2>
                <p>{slots.length > 0 ? <span >{slots[0]}</span> : <span className='text-red-500'>No slots avaible</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} avaible</p>
                <div className="card-actions justify-end">
                    <label 
                    onClick={() => setTreatment(service)} 
                    disabled={slots.length === 0} 
                    className="text-center btn modal-btn btn-sm button uppercase font-bold text-white" 
                    for="booking-modal" 
                   >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;