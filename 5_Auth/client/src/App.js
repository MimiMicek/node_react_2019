import React from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
import FOAAS from './components/FOAAS';


function App() {
  return (
    <div className="App">
      <FOAAS/>
      <TrafficLight myData="something" />
    </div>
  );
}

export default App;
