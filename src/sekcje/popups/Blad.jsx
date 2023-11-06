import React from "react";

const Blad = ({ onClose, danebledu }) => {
  return (
    <div className="overlay">
      <div className="custom-popup">
        <h3>{danebledu}</h3>
        <button className="close-button2" onClick={() => onClose()}>
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default Blad;
