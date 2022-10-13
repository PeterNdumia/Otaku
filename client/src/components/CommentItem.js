import React from 'react';
import axios from 'axios';


function CommentItem({comment, onEditComment, onDeleteComment}) {

    //create functions to edit and delete comments 
    function handleDelete(){
        axios.delete(`https://localhost:3000/comments/${comment.id}`)
        .then(()=>{
           
            onDeleteComment(comment)
        })


    }
    function handleEdit(){
        
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