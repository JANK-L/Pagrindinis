import React from "react";
import Zmogus from "./Zmogus";

const ZmoniuSarasas = () => {
  let zmones = [
    { vardas: "Aiste", amzius: 20 },
    { vardas: "Tomas", amzius: 32 },
  ];
  let arRodyti = [true, false];
  return (
    <div>
      <h2>ZmoniuSarasas</h2>

      {zmones.map((zmogus, i) => (
        <Zmogus key={i} zmogus={zmogus} rodytiAmziu={arRodyti[i]} />
      ))}
    </div>
  );
};

export default ZmoniuSarasas;
