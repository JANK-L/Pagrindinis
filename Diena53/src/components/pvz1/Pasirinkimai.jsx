import React, { useState } from "react";
import Mygtukas from "./Mygtukas";

const Pasirinkimai = () => {
  const [pasirinkta, setPasirinkta] = useState("");

  const pagaunameReiksme = (argumentas) => {
    setPasirinkta(argumentas);
  };

  let miestai = ["Vilnius", "Kaunas", "Klaipeda"];

  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Pasirinkimai</h2>
      <div style={{ border: "2px solid green" }}>
        {miestai.map((miestas, i) => (
          <Mygtukas
            key={i}
            miestas={miestas}
            griztaReiksme={pagaunameReiksme}
          />
        ))}
      </div>
      <p>Pasirinktas miestas: {pasirinkta}</p>
    </div>
  );
};

export default Pasirinkimai;
