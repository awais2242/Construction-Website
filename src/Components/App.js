import React from 'react';
import './App.css';
import Footers from './Footers';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
      <Footers></Footers>
    </div>
  );
}

export default App;
