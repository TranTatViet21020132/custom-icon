import React from 'react';
import { VisitNoteSolid } from './icons_new/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VisitNoteSolid width={100} height={100} fillColor='black'/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
