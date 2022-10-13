import React from 'react';
import AnimeSummary from '../components/AnimeSummary'
import NewComment from '../components/NewComment'
import CommentList from '../components/CommentList'

function AnimePage(props) {
    return (
        <div className='anime-page'>
            <AnimeSummary/>
            <NewComment/>
            <CommentList/>
        </div>
    );
}

export default AnimePage;