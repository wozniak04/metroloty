

import React, { useState } from "react";
import Podpis from "./Podpis"; 

const Petycje = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePetitionClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className="petition-section">
        <h2>Podpisz Naszą Petycję</h2>
        <p>Dołącz do osób, które popierają wprowadzenie technologii. Podpisz naszą petycję.</p>
        <button className="btn" onClick={handlePetitionClick}>Podpisz Petycję</button>
      </div>

      {isPopupOpen && (
        <Podpis onClose={handlePopupClose} />
      )}
    </>
  );
};

export default Petycje;
