import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Input } from './Input';

function App() {
  const [labels, setLabels] = useState([])

  const addToBeginning = () => {
    setLabels([labels.length + 1, ...labels])
  }

  const addToEnd = () => {
    setLabels([...labels, labels.length + 1])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Using index is an anti-pattern demo</h2>

        <div>
          <button onClick={addToBeginning}>Add to beginning</button>{" "}
          <button onClick={addToEnd}>Add to end</button>
        </div>

        {
          labels.map((label, index) => <Input key={obj.id} label={label} keyUsed={index} />)
        }
      </header>
    </div>
  );
}

export default App;
