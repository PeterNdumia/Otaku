import React, { useState } from 'react';

function NewComment({onAddComment}) {
    const [commentMsg, setCommentMsg]= useState("")
    function handleSubmit(event){
        event.preventDefault();
        fetch("https://localhost:3000/animeComments", {
             method: "POST",
              body: JSON.stringify({
               commentMsg:commentMsg,      
                
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(data=> onAddComment(data));
    }

    return (
    <div className='new-comment'>
            <form onSubmit={handleSubmit}>
               <input type="text" name="msg" value={commentMsg} onChange={(e)=> setCommentMsg(e.target.value)}/>
              <button type="submit" value="Submit">Post</button>
             </form> 
        </div>
    );
}

export default NewComment;