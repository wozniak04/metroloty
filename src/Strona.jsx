import React from "react"
import './Stronastyle.css'
import Naglowek from "./sekcje/Naglowek"
import Info from "./sekcje/Informacje"
import Dotacje from "./sekcje/Dotacje"
import Petycje from "./sekcje/Petycje"
import Aktualnosci from "./sekcje/Aktualnosci"
import Kontakt from "./sekcje/Kontakt"
import Stopka from "./sekcje/Stopka"


function Strona() {
    return (
      <div className="app">
        
          <Naglowek/>
          <Info/>
          <Dotacje/>
          <Petycje/>
          <Aktualnosci/>
          <Kontakt/>
          <Stopka/>
      </div>
    )
  }
  export default Strona