import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CommentItem({user, comment, onEditComment, onDeleteComment}) {

    const[username, setUsername]= useState()
    useEffect(()=>{
        fetch(`/comments/${comment.id}`)
        .then((response)=> response.json())
        .then((data)=>{
            setUsername(data.user.username)
        })
        .catch((err)=>{
            console.log(err.message);

        });
    }, [comment.id])
  

    //create functions to edit and delete comments 
    function handleDelete(){
        axios.delete(`/comments/${comment.id}`)
        .then(()=>{
           
            onDeleteComment(comment)
        })


    }
    function handleEdit(){
        
    }
    if(user.id === comment.user_id){
       return( <div className='comment-item'>
        <p><b><i>@{username}</i></b>  {comment.commentMsg}</p>
        <div className='button-container'>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
        </div>
    </div>)
    }
    return (
        <div className='comment-item'>
            <p><b><i>@{username}</i></b> {comment.commentMsg}</p>
        </div>
    );
}

export default CommentItem;