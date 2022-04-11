import React from 'react';
import {RiCopyrightFill} from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='text-white text-center m-5 p-5 footer rounded-3'>
            <p><small>Copyright <RiCopyrightFill></RiCopyrightFill> World Super Sports Car {(new Date().getFullYear())}</small></p>
        </footer>
    );
};

export default Footer;