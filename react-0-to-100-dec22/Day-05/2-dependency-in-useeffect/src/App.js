import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dependency in useEffect Demo</h1>

        <div>
          <select value={id} onChange={e => setId(e.target.value)}>
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
            <option value="4">User 4</option>
          </select>
        </div>

        <div style={{
          height: '200px',
        }}>
          {loading ? (
            <p>Loading</p>) :
            userData ? (
              <div>
                <h2>{userData.name}</h2>
                <p>{userData.email}</p>
                <p>{userData.phone}</p>
              </div>
            ) : 'No user data found'
          }
        </div>
      </header>
    </div>
  );
}
