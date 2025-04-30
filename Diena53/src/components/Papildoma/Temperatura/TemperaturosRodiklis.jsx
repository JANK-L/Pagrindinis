import React, { useState } from "react";
import TemperaturosIvestis from "./TemperaturosIvestis";

const TemperaturosRodiklis = () => {
  const [temperatura, setTemperatura] = useState(22);

  const atnaujinti = (reiksme) => {
    setTemperatura(reiksme);
  };

  return (
    <div>
      <h2>TemperaturosRodiklis</h2>
      <p>Temperatura: {temperatura} &deg;C</p>
      {temperatura < 3 && <p>Gali buti plikledis</p>}
      <TemperaturosIvestis grazintiTemperatura={atnaujinti} />
    </div>
  );
};

export default TemperaturosRodiklis;
