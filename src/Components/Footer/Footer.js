import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer text-light d-grid justify-content-center align-items-center'>
            <div className='mt-5 pt-5'><h3>Location</h3>
            <h4>3865 Nutters Barn Lane Clarion, IA 50525</h4>
            
            <h3>Email</h3>
            <h4>kevineevans@rhyta.com</h4>
            <h6 className='text-primary'>© 2021 CarDeal All right reserved</h6></div>
        </div>
    );
};

export default Footer;