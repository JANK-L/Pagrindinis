import React from "react";

const Darbuotojas = ({ darbuotojas }) => {
  let { vardas, pavarde, bonusas } = darbuotojas;

  const bonusoDydis = (b) => {
    return b > 100
      ? "nu, jau kazkas geriau"
      : b > 0
      ? "bent ant kebabo uzmete..."
      : "gaila :(";
  };
  return (
    <div>
      <h3>
        {vardas} {pavarde}
      </h3>
      <p>Kaledinis bonusas yra {bonusas}&euro;</p>
      <p>{bonusoDydis(bonusas)}</p>
      <br />
    </div>
  );
};

export default Darbuotojas;
