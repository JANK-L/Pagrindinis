import React, { useState } from "react";
import NaujasIvykis from "./NaujasIvykis";

const Ivykiai = () => {
  const [pavadinimai, setPavadinimai] = useState([]);

  const pridetiPavadinima = (reiksme) => {
    setPavadinimai([reiksme, ...pavadinimai]);
  };

  return (
    <div>
      <h2>Ivykiai</h2>
      {pavadinimai.length > 0
        ? pavadinimai.map((pavadinimas, i) => <p key={i}>{pavadinimas}</p>)
        : "Nera irasytu ivykiu"}
      <NaujasIvykis grazintiPavadinima={pridetiPavadinima} />
    </div>
  );
};

export default Ivykiai;
