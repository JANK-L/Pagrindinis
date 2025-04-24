import React from "react";

const Delione = ({ info }) => {
  let { pavadinimas, detaliu_kiekis, plotis, ilgis } = info;

  const sunkumas = (dk) => {
    return dk > 1000 ? "Sunki" : dk > 500 ? "Vidutine" : "Lengva";
  };

  return (
    <div>
      <h3>{pavadinimas}</h3>
      <p>
        Detaliu kiekis: <strong>{detaliu_kiekis}</strong> vnt.
      </p>
      <p>
        Plotis: <strong>{plotis}</strong> cm
      </p>
      <p>
        Ilgis: <strong>{ilgis}</strong> cm
      </p>
      <p>Sudetingumas: {sunkumas(detaliu_kiekis)}</p>
    </div>
  );
};

export default Delione;
