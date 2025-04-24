import React from "react";
import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let darbuotojai = [
    {
      vardas: "Petras",
      pavarde: "Petraitis",
      bonusas: 300,
    },
    {
      vardas: "Jonas",
      pavarde: "Jonaitis",
      bonusas: 0,
    },
    {
      vardas: "Tomas",
      pavarde: "Tomaitis",
      bonusas: 60,
    },
  ];
  return (
    <div>
      <h2>Imone</h2>
      {darbuotojai.map((darbuotojas, i) => (
        <Darbuotojas key={i} darbuotojas={darbuotojas} />
      ))}
    </div>
  );
};

export default Imone;
