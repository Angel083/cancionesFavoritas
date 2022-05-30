import React from 'react';
import "./styles/normalize.css"
import "./styles/styles.css"
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import AddSong from './views/AddSong';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AddSong" element={<AddSong/>}></Route>
      </Routes>
  );
}

export default App;
