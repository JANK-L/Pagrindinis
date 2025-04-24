import React from "react";
import Automobilis from "./Automobilis";

const Servisas = () => {
  let automobiliai = [
    { marke: "Audi", modelis: "A6" },
    { marke: "BMW", modelis: "X5" },
    { marke: "Honda", modelis: "Civic" },
    { marke: "Mazda", modelis: "6" },
    { marke: "Toyota", modelis: "Corolla" },
  ];
  return (
    <div>
      <h2>Servisas</h2>
      {automobiliai.map((masina, i) => (
        <Automobilis key={i} auto={masina} />
      ))}
    </div>
  );
};

export default Servisas;
