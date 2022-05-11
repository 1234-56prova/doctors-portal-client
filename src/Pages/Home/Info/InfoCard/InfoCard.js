import React from 'react';

const InfoCard = ({ img, cardTitle, color }) => {
    return (
        <div class={`card lg:card-side bg-${color} shadow-xl`}>
            <figure className='pl-5'><img style={{width: '100px', height: '100px'}} src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;