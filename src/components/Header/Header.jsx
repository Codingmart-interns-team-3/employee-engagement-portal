import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className='Header farkonium text-center h2 m-0'>
            <div className='headerContent'>
                Header 
                <Link className='text-warning link' to='/'> Home</Link>
            </div>
        </div>
    )
}

export default Header
