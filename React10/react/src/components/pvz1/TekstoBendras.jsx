import React from "react";
import TekstoVaikas from "./TekstoVaikas";
const vidinisTekstas = "Trecio komponento tekstas";

const TekstoBendras = () => {
  return (
    <div>
      <h2>Teksto dalykai</h2>
      <TekstoVaikas tekstas="Mano perduotas tekstas" />
      <TekstoVaikas tekstas="antras tekstas" />
      <TekstoVaikas tekstas={vidinisTekstas} />
      <TekstoVaikas />
    </div>
  );
};

export default TekstoBendras;
