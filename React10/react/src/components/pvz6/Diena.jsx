import React from "react";

const Diena = ({ temp }) => {
  const arSiltaDiena = (t) => {
    return t >= 15 ? "Diena silta" : "Diena salta";
  };
  return (
    <div>
      <h3>Dienos temperatura: {temp}&deg;C</h3>
      <p>{arSiltaDiena(temp)}</p>
    </div>
  );
};

export default Diena;
