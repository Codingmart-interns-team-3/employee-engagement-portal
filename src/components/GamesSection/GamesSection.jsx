import React, { useState } from 'react';
import './gamesSection.scss';

import { GameCard, PlayerCard } from '../GamesCard/GameCard';
import games from '../../service/gameList';
import GameLogoBackground from '../GameLogoBackground/GameLogoBackground';

const GamesSection = () => {
    const [focusedGame, setFocusedGame] = useState(games[0]);
    console.log(focusedGame);
    return (
        <div className='GamesSection farkonium py-4'>
            <h2>List Of Games</h2>
            <div className='d-flex content justify-content-around'>
                {
                    games.map((e)=>{
                        return <GameCard key={e.id} onClick={setFocusedGame} data={e} />
                    })
                }
            </div>
            <div className='d-flex justify-content-around flex-wrap-reverse m-3'>
                <div className='mx-auto'>
                    <p className='h3'>Top Players</p>
                    {
                        focusedGame.players.map(e=>{
                            return <PlayerCard key={e.id} data={e} />
                        })
                    }
                </div>
                <div className='mx-auto my-2'>
                    <GameLogoBackground game={focusedGame} />
                </div>
            </div>
        </div>
    )
}

export default GamesSection
