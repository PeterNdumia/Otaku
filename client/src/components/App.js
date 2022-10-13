import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HomePage from '../pages/HomePage'
import AnimePage from '../pages/AnimePage'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/" element= {<HomePage/>} ></Route>
      <Route path="/animepage" element= {<AnimePage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
