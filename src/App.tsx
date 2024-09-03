import React from 'react';
import './App.css';
import data from './components/data.json';
import Listing from './components/Listing';

function App() {

  return (
    <>
        <Listing items={data}/>
    </>
  );
}

export default App;