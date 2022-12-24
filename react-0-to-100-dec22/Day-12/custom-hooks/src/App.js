// import { useState } from 'react';
import './App.css';
import { useDarkMode } from './hooks/useDarkMode';
import { useKeyPress } from './hooks/useKeyPress';
import { useToggle } from './hooks/useToggle';
import { useWindowSize } from './hooks/useWindowSize';

function App() {
  const [divVisible, setDivVisible] = useToggle(false);
  const yPressed = useKeyPress("y");
  const enterPressed = useKeyPress("enter");
  const nPressed = useKeyPress("n");
  const windowSize = useWindowSize()
  const [darkMode, setDarkMode] = useDarkMode()

  // Assignment: Complete this hook
  // const [isLoading, error, data] = useFetch("https://jsonplaceholder.typicode.com/todos/1")

  return (
    <div className="App">
      Hello there!

      <div>
        <button onClick={setDivVisible}>Toggle</button>

        {divVisible && <div>Toggle is on</div>}
      </div>

      <div>
        {yPressed && <p>y Key Pressed</p>}
        {enterPressed && <p>Enter Key Pressed</p>}
        {nPressed && <p>n Key Pressed</p>}
      </div>

      <div>
        {
          JSON.stringify(windowSize)
        }

        {
          windowSize.width < 700 ? <div>Small message</div> : <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        }
      </div>

      <div>
        <button onClick={setDarkMode}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        {darkMode && <p>Welcome to the Dark side!</p>}
      </div>
    </div>
  );
}

export default App;
