import React, { useEffect, useState } from "react";
import "./Dydis.css";

const Dydis = (props) => {
  let dydziai = [
    { pavadinimas: "S", aprasymas: "S (36)", kaina: 19.99, kiekis: 1 },
    { pavadinimas: "M", aprasymas: "M (38)", kaina: 29.99, kiekis: 1 },
    { pavadinimas: "L", aprasymas: "L (40/42)", kaina: 32.99, kiekis: 0 },
    { pavadinimas: "XL", aprasymas: "XL (44)", kaina: 39.99, kiekis: -1 },
  ];

  useEffect(() => {
    props.kaina(dydziai[pasirinktas].kaina);
  }, []);

  const [pasirinktas, setPasirinktas] = useState(0);
  const naujaKaina = (index) => {
    setPasirinktas(index);
    props.kaina(dydziai[index].kaina);
  };

  return (
    <div>
      <p>
        Dydis — <span>{dydziai[pasirinktas].pavadinimas}</span>
      </p>
      <div className="dydziai">
        {dydziai.map((dydis, i) => (
          <button
            key={i}
            className={
              "dydis " +
              (pasirinktas === i ? "pasirinktas " : "") +
              (dydis.kiekis === -1 ? "nera " : "")
            }
            disabled={dydis.kiekis === -1 ? true : false}
            onClick={() => naujaKaina(i)}
          >
            {dydis.aprasymas}
          </button>
        ))}
      </div>
      {dydziai[pasirinktas].kiekis === 0 && (
        <p className="paskutinis">Paskutiniai vienetai</p>
      )}
    </div>
  );
};

export default Dydis;
