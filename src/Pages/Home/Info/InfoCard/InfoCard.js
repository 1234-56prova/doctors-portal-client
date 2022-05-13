import React from 'react';

const InfoCard = ({ img, cardTitle, color }) => {
    return (
        <div className={`card lg:card-side bg-${color} shadow-xl`}>
            <figure className='pl-5'><img style={{width: '100px', height: '100px'}} src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;