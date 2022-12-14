import './App.css';
import { useState, useEffect } from 'react'

function Repository(props) {
  return (
    <div className="wrapper">
      <h1>My Repository List</h1>
      <ul>
        {props.data.map(item => <li>{item.name}</li>)}
      </ul>
    </div>
  )
}

function App() {
  const [username, setUsername] = useState('alok722')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(result => setData(result))
  }, [username])

  return (
    <div className="wrapper">
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <div>
        {
          data.length > 0 ? <Repository data={data} /> : <h1>Fetching...</h1>
        }
      </div>
    </div>
  );
}

export default App;
