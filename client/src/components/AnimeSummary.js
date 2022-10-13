import React from 'react';

function AnimeSummary(anime) {

    return (
        <div>
            <h3>{anime.title}</h3>
            <img src={anime.img} alt=""/>
            <p>{anime.desc}</p>
            <p>Rating: {anime.rating}</p>
            
        </div>
    );
}

export default AnimeSummary;