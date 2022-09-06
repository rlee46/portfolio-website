import './App.css';
import Home from './js/Home';
import Header from './js/Header';
import React from 'react';
import {createRoot} from 'react-dom/client';

function App() {
  return (
    <>
    <div className="App">
      <div className='home'><Home/></div>
    </div>
    </>
  );
}

export default App;
