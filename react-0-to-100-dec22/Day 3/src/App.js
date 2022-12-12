import React, { useState } from 'react'
import './App.css';
import { Counter } from './components/counter';
import { Img } from './components/img';

function CS1() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Img />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

function CS2() {
  return (
    <div className="App">
      Wassup
    </div>
  );
}

export { CS1, CS2 }
