import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const ServiceDetail = () => {
    const [service, setService] = useState({});
    const {name, price, description, img} = service;
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/checkout');
    }
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>Welcome to detail</h2>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>{price}</h2>
            <button onClick={handleNavigate}>Check Out</button>
        </div>
    );
};

export default ServiceDetail;