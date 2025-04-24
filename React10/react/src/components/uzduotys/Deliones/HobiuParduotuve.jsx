import React from "react";
import Delione from "./Delione";

const HobiuParduotuve = () => {
  let deliones = [
    { pavadinimas: "Bokstas", detaliu_kiekis: 300, plotis: 40, ilgis: 60 },
    { pavadinimas: "Visata", detaliu_kiekis: 800, plotis: 100, ilgis: 110 },
    { pavadinimas: "Balta", detaliu_kiekis: 10000, plotis: 200, ilgis: 300 },
  ];
  return (
    <div>
      <h2>HobiuParduotuve</h2>
      {deliones.map((delione, i) => (
        <Delione key={i} info={delione} />
      ))}
    </div>
  );
};

export default HobiuParduotuve;
