import React from 'react';

const Service = ({img, cardTitle, cardBody}) => {
    return (
        <div>
            <div className="m-2 card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardBody}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;