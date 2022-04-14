import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/checkout');
    }
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <button onClick={handleNavigate}>Check Out</button>
        </div>
    );
};

export default ServiceDetail;