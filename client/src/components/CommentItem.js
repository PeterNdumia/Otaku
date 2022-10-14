import React from 'react';
import axios from 'axios';


function CommentItem({user, comment, onEditComment, onDeleteComment}) {

    //create functions to edit and delete comments 
    function handleDelete(){
        axios.delete(`http://localhost:3000/comments/${comment.id}`)
        .then(()=>{
           
            onDeleteComment(comment)
        })


    }
    function handleEdit(){
        
    }
    if(user.id === comment.user_id){
       return( <div className='comment-item'>
        {/*<p>{comment.user_id}</p>*/}
        <p>{comment.commentMsg}</p>
        <div className='button-container'>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
        </div>
    </div>)
    }
    return (
        <div className='comment-item'>
            {/*<p>{comment.user_id}</p>*/}
            <p>{comment.commentMsg}</p>
        </div>
    );
}

export default CommentItem;