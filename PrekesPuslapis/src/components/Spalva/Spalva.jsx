import React, { useState } from "react";
import "./Spalva.css";

const Spalva = () => {
  let spalvos = [
    { pavadinimas: "Juoda", spalva: "#252525" },
    { pavadinimas: "Ruda", spalva: "#7A5B3D" },
    { pavadinimas: "Kūno spalva", spalva: "#DBC6AD" },
  ];

  const [pasirinktas, setPasirinktas] = useState(0);

  return (
    <div>
      <p>
        Spalva — <span>{spalvos[pasirinktas].pavadinimas}</span>
      </p>
      <div className="spalvos">
        {spalvos.map((spalva, i) => (
          <div
            className={
              "pasirinkimas " + (pasirinktas === i ? "pasirinktas" : "")
            }
            key={i}
          >
            <div
              className="spalva"
              style={{ backgroundColor: spalva.spalva }}
              onClick={() => setPasirinktas(i)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spalva;
