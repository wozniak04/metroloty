import React, { useState } from 'react';


const Podpis = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onClose(formData);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="overlay">
      <div className="custom-popup">
        
        <h3>Podpisz Petycję</h3>
        <form onSubmit={handleSubmit}>  
        <input
            type="text"
            name="name"
            placeholder="Imię"
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            value={formData.message}
            onChange={handleFormChange}
          />
         
          <button className="button-submit" type="submit">Podpisz</button>
          <button className="close-button" onClick={() => onClose({})}>
            Zamknij
          </button>
        </form>
      </div>
    </div>
  );
};

export default Podpis;
