import React from 'react';
import './App.scss';
import {Main} from './components/main/Main';
import {Navbar} from './components/navbar/Navbar';

function App() {
  return (
    <div className={"App"}>
      <Navbar/>
      <Main/>
    </div>
  );
}



export default App;
