import React, {useState} from 'react';

function UpdateComment(props) {

  const[commentMsg, setCommentMsg]= useState()

    function handleSubmit(){

    }

    return (
        <div className='new-comment'>
        <p>P</p>
         <form onSubmit={handleSubmit}>
            <input type="text" name="msg" value={commentMsg} onChange={(e)=> setCommentMsg(e.target.value)}/>
           <button type="submit" value="Submit">Post</button>
          </form> 
     </div>
    );
}

export default UpdateComment;