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
        <div className='comment-item'>
        {/*comment item from index comment'*/}
        <p>{comment.commentMsg}</p>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
    </div>
    }
    return (
        <div className='comment-item'>
            {/*comment item from index comment'*/}
            <p>{comment.commentMsg}</p>

        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
        </div>
    );
}

export default CommentItem;