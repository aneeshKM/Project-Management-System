import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Project from './Project/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Project/>}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
