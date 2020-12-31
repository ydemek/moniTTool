import React from 'react';
import {Header} from './Components/Header.jsx'
import Content from './Components/Content.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='w-100 h-100'>
      <Content />
      </div>
    </div>
  );
}

export default App;
