import React from 'react';
import AnimeSummary from '../components/AnimeSummary'
import NewComment from '../components/NewComment'
import CommentList from '../components/CommentList'

function AnimePage({animes, comments, getComments, onAddComment, onEditComment, onDeleteComment}) {
    return (
        <div className='anime-page'>
            <AnimeSummary animes={animes} />
            <NewComment onAddComment={onAddComment}/>
            <CommentList getComments={getComments} onEditComment={onEditComment} onDeleteComment={onDeleteComment}/>
        </div>
    );
}

export default AnimePage;