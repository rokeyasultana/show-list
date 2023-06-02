import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowSummary from './pages/ShowSummary';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shows/:showId" element={<ShowSummary/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

