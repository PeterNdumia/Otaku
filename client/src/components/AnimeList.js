import React,{useEffect} from 'react';
import AnimeItem from './AnimeItem';

function AnimeList({animes, getAnimes}) {
      //fetch animes and map them on animelist
      useEffect(()=>{
        fetch('https://localhost:3000/animes')
        .then((response)=> response.json())
        .then((data)=>{
            getAnimes(data)
        })
        .catch((err)=>{
            console.log(err.message);

        });
    }, [getAnimes])

    const renderAnimes = animes.map((anime)=>{
        return <AnimeItem key= {animes.id} anime={anime} animeID={anime.id}/>
    })

    return (
        <div className='anime-list'>
            {renderAnimes}
        </div>
    );
}

export default AnimeList;