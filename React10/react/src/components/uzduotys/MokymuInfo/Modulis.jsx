import React from "react";

const Modulis = ({ info }) => {
  return (
    <div>
      <h3>Modulio pavadinimas: {info.pavadinimas}</h3>
      <p>Trukme: {info.trukme} val.</p>
    </div>
  );
};

export default Modulis;
