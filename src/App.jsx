import "./App.css";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function App() {
  const [modalState, setModalState] = useState(false);
  const handleClick = () => {
    setModalState(!modalState);
  };
  return (
    <main>
      <button onClick={handleClick}>Open Modal</button>
      <p>lorem ipsum docet</p>
      <Modal modalState={modalState} handleClick={handleClick} />
    </main>
  );
}

export default App;
