import React, { useState, useEffect } from "react";

const Aktualnosci = (props) => {
  const [aktualnosci, setAktualnosci] = useState([]);
  const [odpal,setodpal]=useState(true);

  const ustawodpal=()=>{
    setodpal(!odpal)
  }

  useEffect(() => {
    let tab=[];
    if(props.aktualnosci[0].tytul==='')
      tab=props.aktualnosci.slice(1)
    else
    tab=props.aktualnosci
    setAktualnosci(tab);
  }, [props]);

  return (
    <div className="latest-news" onClick={ustawodpal}>
      <h2>{odpal ? 'Otwórz Aktualności': 'Zamknij Aktualności'}</h2>
      {aktualnosci.length>1 ? aktualnosci.map((x, index) => (
        <div key={index} hidden={odpal} className="aktualnosci">
          <h1>{x.tytul}</h1>
          <p>{x.artykul}</p>
        </div>
      )): null}
    </div>
  );
};

export default Aktualnosci;
