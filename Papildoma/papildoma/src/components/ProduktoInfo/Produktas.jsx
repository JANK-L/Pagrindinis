import React from "react";

const Produktas = ({ produktas }) => {
  return (
    <div>
      <h3>{produktas.pavadinimas}</h3>
      <small>Kaina: {produktas.kaina} &euro;</small>
      <br />
      <small>
        Kiekis:{" "}
        {produktas.kiekis === 0 ? "Išparduota" : produktas.kiekis + " vnt"}.
      </small>
      <br />
    </div>
  );
};

export default Produktas;
