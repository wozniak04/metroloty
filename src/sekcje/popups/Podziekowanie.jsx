
const Podziekowanie=({onClose,imie})=>{
    return(
        <>
        <div className="overlay">
        <div className="custom-popup">
        <h3>Dziękujemy {imie} za podpisanie naszej petycji</h3>
        
          <button className="close-button2" onClick={() => onClose()}>
            Zamknij
          </button>
      </div>
    </div>
        </>
    )
};

export default Podziekowanie;