import React from "react"
import './Stronastyle.css'
import Platnosc from './platnosc.jsx'

function Strona() {
    return (
      <div className="app">
        <header className="header">
          <h1>Metroloty - Bo marzenia ludzkości zakopane są pod ziemią</h1>
          <p>Wspieraj naszą inicjatywę i przyczynij się do wprowadzenia naszej innowacyjne technologii na rynek.</p>
        </header>
        <section className="main-content">
          <div className="technology-info">
            <h2>MetroLoty™</h2>
            <p>
            Samoloty w Metrze To innowacyjna metoda komunikacji miejskiej pozwalająca, by w niskiej konkurującej z biletami autobusowymi cenie podróżować z prędkością ponad 300km/h. Całość opiera się na wykonaniu ogromnych sieci tunelowych zdolnych do pomieszczenia tam samolotu pasażerskiego. W tak skonstruowanym tunelu samolot będzie w stanie rozpędzić się do zadowalających prędkości pozostawiając w tyle przeżytki technologi takie jak samochody czy też pociągi. Brzmi świetnie? I takie właśnie jest, bo według naszych ciężkich obliczeń koszta za:
            </p>
            <p>
            -wykonanie 24000 km tuneli o średnicy 200 metrów
            </p>
            <p>
            -zakup ponad 100 samolotów
            </p>
            <p>
            -Konstrukcja innowacyjnych technologi
            </p>
            <p>
            -Zakup najwyżej klasy komputerów
            </p>
            <p>
            Będzie nas Kosztować tylko 30 000$!
            </p>
          </div>
          <div className="donation-section">
            <h2>Wesprzyj Nas</h2>
            <p>
              Przyczynij się do wprowadzenia technologii, wpłacając dotację. Każda kwota ma znaczenie.
            </p>
            <div className="donation-pp">
            <Platnosc/>
            </div>
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