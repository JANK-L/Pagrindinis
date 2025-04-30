import React from "react";

const ImoneSpausdinimas = ({ darbuotojai }) => {
  return (
    <>
      {darbuotojai.length > 0
        ? darbuotojai.map((darbuotojas, i) => (
            <div key={i}>
              <hr />
              <h3>
                {darbuotojas.vardas} {darbuotojas.pavarde}
              </h3>
              <p>Pareigos: {darbuotojas.pareigos}</p>
              <p>Atlyginimas: {darbuotojas.atlyginimas}&euro;</p>
              <hr />
            </div>
          ))
        : "Šiuo metu nėra ivestu darbuotoju"}
    </>
  );
};

export default ImoneSpausdinimas;
