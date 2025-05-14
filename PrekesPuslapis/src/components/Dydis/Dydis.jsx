import React, { useEffect, useState } from "react";
import "./Dydis.css";

const Dydis = (props) => {
  let dydziai = [
    { pavadinimas: "S", aprasymas: "S (36)", kaina: 19.99 },
    { pavadinimas: "M", aprasymas: "M (38)", kaina: 29.99 },
    { pavadinimas: "L", aprasymas: "L (40/42)", kaina: 32.99 },
    { pavadinimas: "XL", aprasymas: "XL (44)", kaina: 39.99 },
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
          <div
            key={i}
            className={"dydis " + (pasirinktas === i ? "pasirinktas" : "")}
            onClick={() => naujaKaina(i)}
          >
            {dydis.aprasymas}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dydis;
