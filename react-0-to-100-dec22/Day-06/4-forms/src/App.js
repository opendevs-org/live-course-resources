
import './App.css';
import { UncontrolledComponent } from './UncontrolledComponent';
import { ControlledComponent } from './ControlledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uncontrolled Component</h1>
        <UncontrolledComponent />

        <hr />
        <h1>Controlled Component</h1>
        <ControlledComponent />
      </header>
    </div>
  );
}

export default App;
