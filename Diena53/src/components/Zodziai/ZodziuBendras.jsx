import React, { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
  let testDAta = ["asd", "SADASD", "asdds"];
  const [zodziai, setZodziai] = useState(testDAta);

  const gaunamaInfo = (reiksme) => {
    setZodziai([reiksme, ...zodziai]);
  };

  const ilgiausiasZodis = () => {
    let ilgiausias = "";
    zodziai.forEach((zodis) => {
      if (zodis.length > ilgiausias.length) ilgiausias = zodis;
    });

    return ilgiausias;
  };

  return (
    <div>
      <h2>ZodziuBendras</h2>

      {zodziai.length > 0 ? (
        <ul>
          {zodziai.map((zodis, i) => (
            <li key={i}>{zodis}</li>
          ))}
        </ul>
      ) : (
        <p>Deja nera informacijos</p>
      )}
      <ZodziuIvedimas grazintiZodi={gaunamaInfo} />
      {zodziai.length > 0 && ilgiausiasZodis()}
    </div>
  );
};

export default ZodziuBendras;
