import React, {useState,useEffect} from 'react';
import AnimeSummary from '../components/AnimeSummary'
import NewComment from '../components/NewComment'
import CommentList from '../components/CommentList'
import useParams from 'react';

function AnimePage({comments, getComments, onAddComment, onEditComment, onDeleteComment}) {
    const params = useParams();
    const[anime, setAnime]= useState();
    useEffect(() =>{
         fetch(`https://localhost:3000/animes/${params.animeId}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setAnime(data)

        })

    },[params.animeId])
    return (
        <div className='anime-page'>
            <AnimeSummary anime={anime} />
            <NewComment onAddComment={onAddComment}/>
            <CommentList comments={comments} getComments={getComments} onEditComment={onEditComment} onDeleteComment={onDeleteComment}/>
        </div>
    );
}

export default AnimePage;