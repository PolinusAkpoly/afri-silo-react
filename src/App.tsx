import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route  path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
