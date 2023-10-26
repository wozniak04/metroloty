

import React from "react";

const Podpis = ({ onClose }) => {
    return (
        <div className="overlay">
          <div className="custom-popup">
            {/* Twój zawartość niestandardowego popupu */}
            <p>To jest niestandardowy popup.</p>
            <button className="zamknij" onClick={onClose}>Zamknij</button>
          </div>
        </div>
      );
    }
export default Podpis;
