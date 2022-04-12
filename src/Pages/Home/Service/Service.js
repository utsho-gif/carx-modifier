import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, price, description, img, id} = service;
    const navigate = useNavigate();
    const handleService = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='rounded-3' src={img} alt="" />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <button onClick={() => handleService(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;