import React,{useEffect} from 'react';
import CommentItem from './CommentItem';

function CommentList({user,animeId, comments, getComments, onDeleteComment}) {
    useEffect(()=>{
        fetch(`/animes/${animeId}`)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            getComments(data.comments)
        })
        .catch((err)=>{
            console.log(err.message);

        });
    }, [getComments, animeId])

    const renderComments = comments.map((comment)=>{
        return <CommentItem user={user} key= {comment.id} comment={comment} commentID={comment.id} onDeleteComment={onDeleteComment}/>
    })

    return (
        //list comment items
        <div className='comment-list'>
           <p>Discussion</p>
           {renderComments}
        </div>
    );
}

export default CommentList;