import { useState } from 'react';
import './App.css';
import { Counter } from './Counter';

export const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShow(!show)}>Toggle</button>

        {show && <Counter />}
      </header>
    </div>
  );
}
