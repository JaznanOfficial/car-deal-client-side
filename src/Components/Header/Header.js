import React from 'react';
import './Header.css'
import car from './car.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header d-flex flex-lg-row flex-column align-items-center justify-content-between'>
            <div className='ms-5'>
                <h1><span className='header-text'>POWER &</span> BEAUTY</h1>
                <h4 className='my-3'>Find the Car You Want, Your Way <br />
                    Then, build your deal to fit your needs.</h4>
                    <Link to='/allCars'><Button variant="outline-danger" >Explore All Cars</Button></Link>
            </div>
            <div><img src={car} alt="" className='w-100 mt-3' /></div>
        </div>
    );
};

export default Header;