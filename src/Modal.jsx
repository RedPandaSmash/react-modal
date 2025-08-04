import React from "react";
// import Modal.css

export default function Modal(props) {
  if (props.modalState === true) {
    return (
      <main id="modal-background">
        <section id="modal-content">
          I am a modal!<button onClick={props.handleClick}>Close Modal</button>
        </section>
      </main>
    );
  }
  return <div style={{ display: "none" }}>Modal</div>;
}
