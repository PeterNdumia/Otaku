import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/" element= {<HomePage/>} ></Route>
      
     </Routes>
    </div>
  );
}

export default App;
