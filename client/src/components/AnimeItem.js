import React from 'react';

function AnimeItem(anime) {

    function handleOnClick(){
        //navigate to login or animeitem
        
    }



    return (
        <div className='anime-item-container'>
         <img src={anime.img} alt=""/>
         <button onClick={handleOnClick}> Discuss</button>
         <p>{anime.desc}</p>
        </div>
    );
}

export default AnimeItem;
