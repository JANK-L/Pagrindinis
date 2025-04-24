import React from "react";
import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let programuotojas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 25,
    pareigos: "Programuotojas",
    atlyginimas: 2000,
  };
  let dizaineris = {
    vardas: "Petras",
    pavarde: "Petraitis",
    amzius: 35,
    pareigos: "dizaineris",
    atlyginimas: 1800,
  };

  return (
    <div>
      <h2>Imone</h2>
      <Darbuotojas darbuotojas={programuotojas} />
      <Darbuotojas darbuotojas={dizaineris} />
    </div>
  );
};

export default Imone;
