import axios from 'axios';
import React, { useState } from 'react';



const Podpis = ({ onClose }) => {
  const [zledane,setzledane]=useState('')
  const [formData, setFormData] = useState({
    imie: '',
    email: '',
    wiadomosc: '',
    nazwisko: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!/^[a-zA-Z]{3,25}$/.test(formData.imie)){
      setzledane("popraw Imię")
    }
    else if(!/^[a-zA-Z]{3,25}$/.test(formData.nazwisko)){
      setzledane("popraw nazwisko")
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(formData.email)){
      setzledane("popraw email")
    }
    else{
      axios.post('http://localhost:5000/czyktospodpisal',{email:formData.email, imie:formData.imie})
      .then((res)=>{
        if(res.data.log){
          onClose(formData);
        }else{

          setzledane('Ktoś o twoim email podpisał już petycje')
        }
      })
      
    }
  
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="overlay">
      <div className="custom-popup">
        
        <h3>Podpisz Petycję</h3>
        <h4>{zledane==="popraw Imię" || zledane==="Ktoś o twoim email podpisał już petycje"? zledane:""}</h4>
        <form onSubmit={handleSubmit}>  
        <input
            type="text"
            name="imie"
            placeholder="Imię"
            value={formData.imie}
            onChange={handleFormChange}
          />
          <h4>{zledane==="popraw nazwisko"? zledane:""}</h4>
          <input
            type="text"
            name="nazwisko"
            placeholder="Nazwisko"
            value={formData.nazwisko}
            onChange={handleFormChange}
          />
          <h4>{zledane==="popraw email"? zledane:""}</h4>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <textarea
            name="wiadomosc"
            placeholder="Twoja wiadomość"
            value={formData.wiadomosc}
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
