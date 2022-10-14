import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function CommentItem({user, comment, onDeleteComment}) {

    const[username, setUsername]= useState()
    const navigate = useNavigate()
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
  
    function handleDelete(){
        axios.delete(`/comments/${comment.id}`)
        .then(()=>{
           
            onDeleteComment(comment)
        })


    }
 
    const setData = (comment) => {
        console.log(comment);
        let {id,commentMsg} = comment
        localStorage.setItem('ID',id)
        localStorage.setItem('COMMENTMSG', commentMsg)

        navigate("/editcomment")
        
     }

    if(user.id === comment.user_id){
       return( <div className='comment-item'>
        <p><b><i>@{username}</i></b>  {comment.commentMsg}</p>
        <div className='button-container'>
        <button  onClick={() => setData(comment)}>edit</button>
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