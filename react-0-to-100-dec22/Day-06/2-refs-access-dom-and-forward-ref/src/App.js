import { useEffect, useRef } from 'react';
import './App.css';
import Input from './Input';

function App() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value)
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <Input id="quantity" label="Quantity" ref={inputRef} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
