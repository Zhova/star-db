import React from 'react';

import './Header.sass'

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='Header'>
            <div className='logo'>
                <Link to='/'>STAR WARS</Link>
            </div>
            <nav className='nav-menu'>
                <Link to='/people'>People</Link>
                <Link to='/planets'>Planets</Link>
                <Link to='/ships'>Star Ships</Link>
            </nav>
            <div className='search'>
                +
            </div>
        </header>
    );
};
