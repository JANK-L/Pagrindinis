import React, { useState } from "react";

const TemperaturosIvestis = (props) => {
  let temp;

  const pakeisti = (event) => {
    temp = event.target.value;
  };

  const atnaujinti = () => {
    if (!isNaN(temp)) props.grazintiTemperatura(temp);
  };
  return (
    <div>
      <input
        type="number"
        value={temp}
        onChange={pakeisti}
        required
        placeholder="Iveskite temperatura"
      />
      <button onClick={atnaujinti}>Atnaujinti</button>
    </div>
  );
};

export default TemperaturosIvestis;
