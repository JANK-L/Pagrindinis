import React from "react";
import Produktas from "./Produktas";

const Produktai = () => {
  let produktai = [
    { pavadinimas: "Kolonėlė", kaina: 45, kiekis: 61 },
    { pavadinimas: "Kuprinė", kaina: 87, kiekis: 0 },
    { pavadinimas: "Grilius", kaina: 450, kiekis: 11 },
    { pavadinimas: "Grietinė", kaina: 4, kiekis: 0 },
  ];
  let arMaistas = [nemaistas, false, false, true];
  return (
    <div>
      <h2>Produktai</h2>
      {produktai.map((produktas, i) => (
        <Produktas key={i} produktas={produktas} kate />
      ))}
    </div>
  );
};

export default Produktai;
