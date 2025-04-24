import React from "react";

const Naujiena = ({ info }) => {
  let { pavadinimas, perziuru_kiekis, istrauka } = info;
  return (
    <div style={{ border: "3px solid white", padding: "9px" }}>
      <h3>
        {pavadinimas} {perziuru_kiekis > 1000 ? "HOT" : ""}
      </h3>
      <p>{istrauka}</p>
      <p>
        <small>Perziurejo: {perziuru_kiekis}</small>
      </p>
    </div>
  );
};

export default Naujiena;
