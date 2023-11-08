import React,{useState} from "react";
import zdjecie1 from "./zdj/zdjeciadostrony/obraz1.jpg"
import zdjecie2 from "./zdj/zdjeciadostrony/obraz2.jpg"
import zdjecie3 from "./zdj/zdjeciadostrony/obraz3.jpg"


const Zdjecia=()=>{
    const [wlaczzdjecie,setwlaczzdjecie]=useState(true)

    const ustawwlaczzdj=()=>{
        setwlaczzdjecie(!wlaczzdjecie)
    }
    return(
        <div className="galeria" onClick={ustawwlaczzdj}>
            <h2>{wlaczzdjecie? 'Otwórz zdjęcia':'Zamknij zdjęcia'}</h2>
            <div hidden={wlaczzdjecie}>

                <img src={zdjecie1} alt="zdjęcie wnętrza"/>
                <img src={zdjecie2} alt="zdjęcie kabiny pilota"/>
                <img src={zdjecie3} alt="mem" className="mem"/>

            </div>
        </div>
    )
}
export default Zdjecia