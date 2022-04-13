import React from 'react';
import error from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;