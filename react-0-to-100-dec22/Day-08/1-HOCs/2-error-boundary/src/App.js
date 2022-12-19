import './App.css';
import { AverageCard } from './components/average-card';
import { ErrorBoundary } from './components/error-boundary/error-boundary';

function Parent({ children }) {
  return (
    <div>
      <p>Parent</p>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parent>
          <div>
            <p>Child</p>
          </div>
        </Parent>
        <div style={{
          width: "100%"
        }}>
          <hr />
        </div>
        <ErrorBoundary>
          <AverageCard arr={[1, 2, 3]} />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
