import React from 'react';
import './App.css';
import Footers from './Footers';
import Navbar from './Navbar';
import About from './About';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <About></About>
      <Footers/>
    </div>
  );
}

export default App;
