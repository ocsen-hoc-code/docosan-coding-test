import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Doctor from './components/doctor/Doctor';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Doctor/>
    </div>
  );
}

export default App;
