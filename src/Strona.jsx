import React from "react"
import './Stronastyle.css'

function Strona() {
    return (
      <div className="app">
        <header className="header">
          <h1>Metroloty - Twoja Innowacyjna Technologia</h1>
          <p>Wspieraj naszą inicjatywę i przyczynij się do wprowadzenia nowej technologii na rynek.</p>
        </header>
        <section className="main-content">
          <div className="technology-info">
            <h2>O Naszej Technologii</h2>
            <p>
              Tu umieść opis swojej innowacyjnej technologii oraz jej znaczenie dla społeczeństwa. 
              Wizualizacje i multimedia pomogą lepiej zrozumieć, jak działa ta technologia.
            </p>
          </div>
          <div className="donation-section">
            <h2>Wesprzyj Nas</h2>
            <p>
              Przyczynij się do wprowadzenia technologii, wpłacając dotację. Każda kwota ma znaczenie.
            </p>
            {/* Dodaj formularz do wpłacania dotacji */}
          </div>
          <div className="petition-section">
            <h2>Podpisz Naszą Petycję</h2>
            <p>
              Dołącz do osób, które popierają wprowadzenie technologii. Podpisz naszą petycję.
            </p>
            {/* Dodaj formularz do zbierania podpisów */}
          </div>
          <div className="latest-news">
            <h2>Aktualności i Blog</h2>
            {/* Wyświetl najnowsze aktualności i wpisy na blogu */}
          </div>
        </section>
        <section className="contact">
          <h2>Kontakt</h2>
          <p>
            Skontaktuj się z nami w razie pytań lub sugestii. Jesteśmy dostępni pod adresem e-mail: kontakt@metroloty.com.
          </p>
        </section>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Metroloty - Wszelkie prawa zastrzeżone.</p>
        </footer>
      </div>
    )
  }
  export default Strona