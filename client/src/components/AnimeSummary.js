import React from 'react';

function AnimeSummary(anime) {

    return (
        <div>
               <p>Animesummary</p>
            <h3>{anime.title}</h3>
            <img src={anime.img} alt=""/>
            <p>{anime.desc}</p>
            <p>Rating: {anime.rating}</p>
            
        </div>
    );
}

export default AnimeSummary;