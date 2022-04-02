import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt Mania</h2>
            <nav className=''>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;