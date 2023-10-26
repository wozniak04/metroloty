import Platnosc from "./platnosc.jsx"

const Dotacje=()=>{
    return(
        <>
        <div className="donation-section">
            <h2>Wesprzyj Nas</h2>
            <p>
              Przyczynij się do wprowadzenia technologii, wpłacając dotację. Każda kwota ma znaczenie.
            </p>
            <div className="donation-pp">
            <Platnosc/>
            </div>
          </div>
        </>
    )
}
export default Dotacje