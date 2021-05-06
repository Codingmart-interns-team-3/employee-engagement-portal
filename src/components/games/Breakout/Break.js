import React from 'react';
import Board from './Board';

export default function Break({user}){
    return (
        <div className='farkonium'>
            <Board user={user} />  
        </div>
    )
}

