import logo from './logo.svg';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5]

  const employeesInfo = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 35 },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h2>Basic rendering example</h2>

        {/* Rendering a list of numbers */}
        <ul>
          {numbers.map((number) => (
            <li>{number}</li>
          ))}
        </ul>

        {/* Rendering a list of employees */}
        <ul>
          {employeesInfo.map((employee) => (
            <li style={{
              border: "1px solid",
            }}>
              <p>Name: {employee.name}</p>
              <p>Age: {employee.age}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
