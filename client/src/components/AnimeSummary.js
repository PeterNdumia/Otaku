import React from 'react';

function AnimeSummary({anime}) {

    return (
        <div className='anime-summary'>
        <p>{anime.title}</p>
        <img src={anime.img} alt=""/>
        <p>{anime.desc}</p>
        <p>Rating {anime.rating}</p>
        </div>
    );
}

export default AnimeSummary;