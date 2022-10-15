import React, { useState } from 'react';
import './Header.css'
const Header = ({add}) => {
    
    return (
        <div className='bg-light d-flex justify-content-between  p-3'>
            <h2>LOGO</h2>
            <div  className='header d-flex'>
            <li className='ms-3 ps-3'>Home</li>
            <li className='ms-3 ps-3'>About</li>
            <li className='ms-3 ps-3'>Service</li>
            <li className='ms-3 ps-3'>Card <sup>{add}</sup></li>
            </div>
        </div>
    );
};

export default Header;