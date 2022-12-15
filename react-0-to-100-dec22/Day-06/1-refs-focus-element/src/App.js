import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef)
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <label htmlFor="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" ref={inputRef} />
    </div>
  );
}

export default App;
