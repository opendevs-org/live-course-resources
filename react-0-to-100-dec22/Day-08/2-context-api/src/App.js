import { ToolBar } from './components/ToolBar';
import { LoginUser } from './components/LoginUser';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {

  return (
    <UserProvider>
      <div className="App">
        <ToolBar />
      </div>
      <LoginUser />
    </UserProvider>
  );
}

export default App;
