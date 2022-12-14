import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    console.log('useEffect without array called');
  });

  useEffect(() => {
    console.log('useEffect with empty array called');
  }, []);

  useEffect(() => {
    console.log('useEffect with state1 dependency called');
  }, [state1]);

  useEffect(() => {
    console.log('useEffect with state2 dependency called');
  }, [state2]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>useEffect Demo:</h1>

        <input type="text" placeholder='state 1' value={state1} onChange={(e) => setState1(e.target.value)} />
        <input type="text" placeholder='state 2' value={state2} onChange={(e) => setState2(e.target.value)} />
      </header>
    </div>
  );
}
