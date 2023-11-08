import React,{useState,useEffect} from "react"
import axios from "axios"
import './Stronastyle.css'
import Naglowek from "./sekcje/Naglowek"
import Info from "./sekcje/Informacje"
import Dotacje from "./sekcje/Dotacje"
import Petycje from "./sekcje/Petycje"
import Aktualnosci from "./sekcje/Aktualnosci"
import Kontakt from "./sekcje/Kontakt"
import Stopka from "./sekcje/Stopka"
import Pytania from './sekcje/Pytania'
import Technologie from "./sekcje/Technologie"
import Zdjecia from "./sekcje/Zdjecia"


function Strona() {

  const [aktualnosci,setaktualnosci]=useState([{
    tytul:'',
    artykul:'',
  }])

  const ustawaktualnosci=(dane)=>{
    setaktualnosci([...aktualnosci,...dane])
  }

  useEffect(() => {
    axios.get('http://localhost:5000/getAktualnosci')
      .then((res) => {
        ustawaktualnosci(res.data.result)
  
      });
  }, []);
  
  
  
    return (
      <div className="app">
        
          <Naglowek/>
          <Info/>
          <Dotacje/>
          <Petycje/>
          <Aktualnosci aktualnosci={aktualnosci}/>
          <Technologie/>
          <Pytania/>
          <Zdjecia/>
          <Kontakt/>
          <Stopka/>
      </div>
    )
  }
  export default Strona