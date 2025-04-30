import React, { useState } from "react";
import ImoneIvedimas from "./ImoneIvedimas";
import ImoneSpausdinimas from "./ImoneSpausdinimas";

const ImoneBendras = () => {
  const [darbuotojai, setDarbuotojai] = useState([]);

  const gaunamaInfo = (reiksme) => {
    setDarbuotojai([reiksme, ...darbuotojai]);
  };

  return (
    <div>
      <h2>ImoneBendras</h2>
      <ImoneIvedimas grzintiDarbuotoja={gaunamaInfo} />
      <ImoneSpausdinimas darbuotojai={darbuotojai} />
      {darbuotojai.length > 0 && (
        <button onClick={() => setDarbuotojai([])}>Isvalyti</button>
      )}
    </div>
  );
};

export default ImoneBendras;
