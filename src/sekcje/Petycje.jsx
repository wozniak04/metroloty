import axios from "axios";
import React, { useState,useEffect } from "react";
import Podpis from "./popups/Podpis";
import Podziekowanie from "./popups/Podziekowanie"
import Blad from "./popups/Blad";

const Petycje = () => {
  const [imie,setimie]=useState();
  const [isPopupOpenpodpis, setPopupOpenpodpis] = useState(false);
  const [isPopupOpenpodziekowania, setPopupOpenpodziekowania] = useState(false);
  const [isPopupbladOpen,setPopupbladOpen] = useState(false);
  const [blad,setblad]=useState();
  const [iloscOsob,setiloscOsob] = useState(1);

  useEffect(() => {

    axios.get('http://localhost:5000/getOsoby')
    .then((res) => {
      if(res.data.log===true)
        setiloscOsob(res.data.ilosc);
    })

  },[]);

  const handlePetitionClick = () => {
    setPopupOpenpodpis(true);
  };

  const handlePopuppodpisClose = (data) => {
    setPopupOpenpodpis(false);
    if(data.hasOwnProperty("imie")){

      setimie(data.imie)
      setPopupOpenpodziekowania(true);

      axios.post('http://localhost:5000/petycje',data)
      .then(res=>{
        if(res.data.log){

          axios.get('http://localhost:5000/getOsoby')
          .then(res => {
            if(res.data.log===true)
              setiloscOsob(res.data.ilosc);
          })

        }else{
          setblad("błąd przy zbieraniu twojej petycji")
          setPopupbladOpen(true)
        }
        
      })
      
    }
    
  };

  const handlepodziekowaniaclose=()=>{
    setPopupOpenpodziekowania(false)
  }
  const handlebladclose=()=>{
    setPopupbladOpen(false)
  }

  return (
    <>
      <div className="petition-section">
        <h2>Podpisz Naszą Petycję</h2>
        <p>Dołącz do {iloscOsob} osób, które popierają wprowadzenie technologii. Podpisz naszą petycję.</p>
        <button className="btn" onClick={handlePetitionClick}>Podpisz Petycję</button>
      </div>

      {isPopupOpenpodpis && (
        <Podpis onClose={handlePopuppodpisClose} />
      )}

      {isPopupOpenpodziekowania &&(
        <Podziekowanie onClose={handlepodziekowaniaclose} imie={imie} />
      )}

      {isPopupbladOpen&&(
        <Blad onClose={handlebladclose} danebledu={blad}/>
      )}
    </>
  );
};

export default Petycje;
