import React from 'react';
import GamesSection from '../../components/GamesSection/GamesSection';
import './home.scss';

const Home = () => {
    return (
        <div className='homePage'>
            <div className='main text-center'>
                <div>
                    <GamesSection />
                </div>
            </div>

        </div>
    )
}

export default Home
