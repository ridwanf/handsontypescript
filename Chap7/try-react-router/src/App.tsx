import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
function App() {

  const renderScreenC = (props: any) => {
    console.log("Screen props", props);
    return <ScreenC {...props} message="This is Screen C" />
  }

  return (
    <Routes>
      <Route path='/' element={<ScreenA />} />
      <Route path='/b' element={<ScreenB />} />
      <Route path='/c/:userId' element={<ScreenC message={''} history={undefined} match={undefined} />} />
    </Routes>
  );
}

export default App;
