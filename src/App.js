import React from 'react';
import './App.css';
import Header from './components/Header';
import Clima from './components/Clima';

function App() {
  return (
    <div className='app'>
      <Header />    

      <h1 className="title">Tiempo en La República Argentina</h1>
      <Clima />
    </div>
  );
}

export default App;
