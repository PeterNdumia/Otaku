import React, {useState, useEffect} from 'react';
import AnimeSummary from '../components/AnimeSummary'
import NewComment from '../components/NewComment'
import CommentList from '../components/CommentList'
import {useParams } from 'react-router-dom'; 
import Login from './Login';

function AnimePage({user,setUser, comments, getComments, onAddComment, onEditComment, onDeleteComment}) {
    const[anime, setAnime]= useState({});
    const params = useParams();
    const animeId = params.animeId
    console.log(animeId)
    console.log(params)

   


    useEffect(() =>{
         fetch(`http://localhost:3000/animes/${animeId}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setAnime(data)

        })
        .catch((err)=>{
            console.log(err.message);

        });

    },[animeId])
    console.log(anime)

    if (!user) return <Login onLogin={setUser} />;
    return (
        <div className='anime-page'>
            <AnimeSummary anime={anime}/>
            <NewComment user={user} animeId={animeId} onAddComment={onAddComment}/>
            <CommentList user= {user} animeId={animeId} comments={comments} getComments={getComments} onEditComment={onEditComment} onDeleteComment={onDeleteComment}/>
        </div>
    );
}

export default AnimePage;