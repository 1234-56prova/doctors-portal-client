import React from 'react';

const Service = ({ service }) => {
    const {name, slots} = service;
    return (
        <div class="service  shadow-xl">
            <div class=" margin-card">
                <h2 style={{color: '#19D3AE'}} class="card-title">{name}</h2>
                <p>{slots.length > 0 ? <span >{slots[0]}</span> : <span className='text-red-500'>No slots avaible</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces': 'space'} avaible</p>
                <div class="card-actions justify-end">
                    <button disabled={slots.length == 0} style={{backgroundColor: '#0FCFEC'}} class="button uppercase font-bold text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;