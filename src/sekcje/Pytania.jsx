import React from "react";
import diagram from './zdj/diagram.jpg'


const Pytania=()=>{
    return(
        <div className="Pytania">
            <h2>Pytania</h2>
            <h1>Czy 30 000$ to przypadkiem nie za mało?</h1>
            <p>
            Oczywiście, że tak! Jednak nie martwicie się, nasza polityka biznesowa zapewni, 
            że każdy grosz wsypany na nasz szczytny cel u nas będzie wart 1 000 000 000% więcej. 
            Za zebraną kwotę zwyczajnie kupimy nowowchodzącą kryptowalutę opartą o technologię blockchain kiedy, 
            wykupimy całą dostępną walutę za niewielkie pieniądze, 
            będziemy mieli 100% kontroli nad jej ceną, co pozwoli nam na podwyższenie jej wartości.
            </p>
            <h1>Czy "Ładowanie Turbo Korbkowe"™ nie zamienia samolotu w pociąg?</h1>
            <h3>NIE!</h3>
            <p>
                Mimo częstego wchodzenia samolotów w strefę ładowania te nadal jednak latają w trakcie podróży. 
                Wykorzystanie prędkości samolotu w tracie podróży jest zaprojektowane w celu zapewnienia komfortowych cen podróży, 
                i nie może zostać uznane za zmianę samolotu w pociąg.
            </p>
            
            <h1> 
                Diagram pokazujący rozmiar stref ładowania podczas przykładowej podróży tunelem 6000 km:
                Czerwony- Strefa ładowania
            </h1>
            <img src={diagram} alt="diagram" className="diagram"/>
           
        </div>
    )
}

export default Pytania