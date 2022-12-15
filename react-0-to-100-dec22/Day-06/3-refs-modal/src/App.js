import { useState } from "react"
import './App.css';
import { InputModal } from './InputModal';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOnSubmit = (value) => {
    if (value === "0") {
      return;
    }

    setQuantity(value);
  }

  return (
    <div className="App">
      <h1>Quantity: {quantity}</h1>

      <button onClick={() => setModalOpen(!modalOpen)}>Edit Quantity</button>

      {modalOpen && (
        <InputModal handleSubmit={handleOnSubmit} handleClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
