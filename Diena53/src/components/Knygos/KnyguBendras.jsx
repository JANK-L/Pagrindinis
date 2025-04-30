import React, { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {
  const [knygos, setKnygos] = useState([]);

  const gaunamaInfo = (reiksme) => {
    setKnygos([reiksme, ...knygos]);
    console.log(knygos);
  };

  return (
    <div>
      <h2>KnyguBendrass</h2>
      <KnygosIvedimas grzintiKnyga={gaunamaInfo} />
      <KnyguSpausdinimas knygos={knygos} />
      {knygos.length > 0 && (
        <button onClick={() => setKnygos([])}>Isvalyti</button>
      )}
    </div>
  );
};

export default KnyguBendras;
