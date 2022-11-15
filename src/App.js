import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import EditSchool from './components/EditSchool';
import Main from './components/Main.js';


function App() {
  return (
    <div className="App">
     <h1>My School app</h1>
     <BrowserRouter>
      <Routes>
        <Route element={<Main/>} exact path="" />
        <Route element={<EditSchool/>} path="/edit/:id" />
        <Route element={<EditSchool/>} path="/add" />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
