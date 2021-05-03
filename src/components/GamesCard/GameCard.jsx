import React from 'react';
import './gameCard.scss';

const GameCard = ({ data, onClick }) => {
    let score = 200;
    return (
        <div className="gameCard">
            <div className='cards' onClick={()=>onClick(data)}>
                <img  draggable={false} src={data.logo} className='gameLogo' alt={data.name} />
                <div className='text-center'>
                    <p className='name'>{data.name}</p>
                    <p className='score'>Best Score : {score}</p>
                </div>
            </div>
        </div>
    )
}

const PlayerCard = ({data})=>{
    return(
        <div className="playerCard">
            <div className='cards'>
                <img draggable={false} src={data.profile} className='gameLogo' alt={data.name} />
                <div className='text-center'>
                    <p className='name'>{data.name}</p>
                    <p className='score'>{data.bestScore}</p>
                </div>
            </div>
        </div>
    )
}

export { GameCard, PlayerCard }
