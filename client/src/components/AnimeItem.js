import React from 'react';
import { useNavigate } from 'react-router-dom';

function AnimeItem(anime) {
    let animeId = anime.id;
    const navigate =useNavigate();
    function handleOnClick(){
        navigate(`/animepage/${animeId}`)

    }

    return (
        <div className='anime-item-container'>
         <img src={anime.img} alt=""/>
         <button onClick={handleOnClick}> Discuss</button>
         <p>{anime.title}</p>
        </div>
    );
}

export default AnimeItem;
