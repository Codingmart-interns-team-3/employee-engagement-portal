import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './background.scss';

const GameLogoBackground = ({ game }) => {
    return (
        <div className='h-100 w-100mx-3 background'>
            <div className='logo'>
                <img draggable={false} src={game.logo} alt='gameLogo' />
                <Link  className='plyBtn'  to={game.url}><Button variant='danger'>Play Now</Button></Link>
            </div>
           <div>
           </div>
        </div>
    )
}

export default GameLogoBackground
