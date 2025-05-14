import React from "react";
import "./Pirmas.css";

const Pirmas = () => {
  const skaicius = 2;

  const dinamineKlase = (sk) => {
    return sk % 2 === 0 ? "lyginis" : "nelyginis";
  };
  return (
    <div>
      <p className={skaicius % 2 == 0 ? "lyginis" : "nelyginis"}>Pirmas</p>
      <p className={dinamineKlase(5)}>kitas tekstas</p>
    </div>
  );
};

export default Pirmas;
