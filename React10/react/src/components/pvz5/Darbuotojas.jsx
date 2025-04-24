import React from "react";

const Darbuotojas = ({ darbuotojas }) => {
  return (
    <div>
      <h3>
        {darbuotojas.vardas} {darbuotojas.pavarde}
      </h3>
      <p>Yra {darbuotojas.amzius} m. amziaus</p>
      <p>Dirba kaip {darbuotojas.pareigos}</p>
      <p>Uzdirba {darbuotojas.atlyginimas}&euro;</p>
    </div>
  );
};

export default Darbuotojas;
