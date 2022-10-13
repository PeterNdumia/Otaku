import React from 'react';
import { useNavigate } from 'react-router-dom';

function AnimeItem({anime}) {
    console.log(anime)
    let animeId = anime.id;
    console.log(animeId)
    const navigate =useNavigate();
    function handleOnClick(){
        navigate(`/animepage/${animeId}`)

    }

    return (
        <div className='anime-item'>
         <h2>{anime.title}</h2>
         <img src={anime.img} alt=""/>
         <button onClick={handleOnClick}> Discuss</button>
         
        </div>
    );
}

export default AnimeItem;
