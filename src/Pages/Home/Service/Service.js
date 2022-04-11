import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;