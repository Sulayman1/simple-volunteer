import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Main</Link>
                <Link to='home'>Home</Link>
                <Link to='volunteer'>volunteer</Link>
            </nav>

        </div>
    );
};

export default Header;