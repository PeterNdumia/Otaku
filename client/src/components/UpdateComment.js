import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

function UpdateComment({onEditComment}) {

  const[commentMsg, setCommentMsg]= useState()
  const  [id, setID] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
      setID(localStorage.getItem('ID'))
      setCommentMsg(localStorage.getItem('COMMENTMSG'))
      
  }, []);

    function handleSubmit(event){
        event.preventDefault();
        fetch(`/comments/${id}`, {
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          commentMsg: commentMsg,
        })
      })
      .then(r => r.json())
      .then(data => onEditComment(data))

      navigate(`/animepage/${id}`)
  
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

export default UpdateComment;