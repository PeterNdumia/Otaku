import '../App.css';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage'
import AnimePage from '../pages/AnimePage'
import { Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";

function App() {
  const[animes, setAnimes]= useState([]);
  const[comments, setComments]= useState([]);

  const getAnimes = useCallback((animes)=>{
    setAnimes(animes)
  },[])


  const getComments = useCallback((comments)=>{
    setComments(comments)
  },[])

  function onAddComment(newComment){
    setComments([...comments, newComment])
  }

  function onEditComment(editedComment){
    const newComments = comments.map(comment=>{
      if (comment.id === editedComment.id){
        return editedComment
      }
      return setComments([...comments,newComments])
    })
  }

  function onDeleteComment(deletedComment){
    const newComments = comments.filter(comment=> comment.id!== deletedComment.id);
    setComments(newComments)
  }


  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/" element= {<HomePage animes={animes} getAnimes={getAnimes} />} ></Route>
      <Route path="/animepage/:animeId" element= {<AnimePage comments={comments} getComments={getComments} onAddComment={onAddComment} onEditComment={onEditComment} onDeleteComment={onDeleteComment}/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
