import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TableData from './Components/Table-Data';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-background-img'></div>
      <header className="App-header">
      </header>
      <TableData />
    </div>
  );
}

export default App;
