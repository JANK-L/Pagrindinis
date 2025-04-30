import React, { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
  const [counter, setCounter] = useState(0);

  const pokytis = (reiksme) => {
    setCounter(counter + reiksme);
  };
  return (
    <div>
      <h2>CounterTev</h2>
      <p>{counter}</p>
      <CounterMygtukai gaudomPokyti={pokytis} />
    </div>
  );
};

export default CounterTev;
