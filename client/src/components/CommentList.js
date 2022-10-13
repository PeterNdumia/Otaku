import React,{useEffect} from 'react';
import CommentItem from './CommentItem';

function CommentList({comments, getComments, onEditComment, onDeleteComment}) {
    useEffect(()=>{
        fetch('https://localhost:3000/comments')
        .then((response)=> response.json())
        .then((data)=>{
            getComments(data)
        })
        .catch((err)=>{
            console.log(err.message);

        });
    }, [getComments])

    const renderComments = comments.map((comment)=>{
        return <CommentItem key= {comment.id} comment={comment} commentID={comment.id} onEditComment={onEditComment} onDeleteComment={onDeleteComment}/>
    })

    return (
        //list comment items
        <div className='comment-list'>
           {renderComments}
        </div>
    );
}

export default CommentList;