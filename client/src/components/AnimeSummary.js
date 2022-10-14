import React from 'react';

function AnimeSummary({anime}) {

    return (
        <div className='anime-summary'>
        <h2>{anime.title}</h2>
        <div className='summary-container'>
        <img src={anime.img} alt=""/>
        <div className='desc-rating'>
        <p>{anime.desc}</p>
        <h2 className='rating'>Rating: {anime.rating}</h2>
        </div>
        </div>
        </div>
    );
}

export default AnimeSummary;