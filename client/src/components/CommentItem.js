import React from 'react';

function CommentItem(props) {
    return (
        <div className='comment-item'>
            //comment item from index comment'
            <p>comment</p>
            <button>edit</button>
            <button>delete</button>
        </div>
    );
}

export default CommentItem;