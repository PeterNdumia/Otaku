import React from 'react';
import AnimeList from '../components/AnimeList'

function HomePage({animes, getAnimes}) {
  
    return (
        <div className='home-page'>
            <p>Home page</p>
            <AnimeList animes={animes} getAnimes={getAnimes}/>
        </div>
    );
}

export default HomePage;