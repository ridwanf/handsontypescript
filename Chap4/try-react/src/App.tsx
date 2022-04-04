import React from 'react';
import './App.css';
import Home from './Home';
import AnotherScreen from './AnotherScreen';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/another" element={<AnotherScreen/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
