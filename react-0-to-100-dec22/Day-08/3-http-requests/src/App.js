import { useEffect, useState } from 'react';
import './App.css';

function GetDemo() {
  const [dogImageUrl, setDogImageUrl] = useState(null)

  const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    if (response.ok) {
      const data = await response.json();
      setDogImageUrl(data.message)
    }
  }

  useEffect(() => {
    fetchDogImage()
  }, [])

  return (
    <>
      {dogImageUrl ? <img src={dogImageUrl} alt="A random dog" width="200px" /> : <p>Loading...</p>}
    </>
  )
}

function FormDemo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitFormData = async (event) => {
    event.preventDefault()
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data)
    }
  }

  return (
    <form onSubmit={submitFormData}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {

  return (
    <div className="App">
      <GetDemo />
      <div style={{
        width: "100%",
      }}>
        <hr />
      </div>
      <FormDemo />
    </div>
  );
}

export default App;
