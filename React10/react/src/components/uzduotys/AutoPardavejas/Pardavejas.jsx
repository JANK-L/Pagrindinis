import React from "react";
import Automobilis from "./Automobilis";

const Pardavejas = () => {
  let automobiliai = [
    {
      marke: "Volkswagen",
      modelis: "Golf",
      metai: 2017,
      rida: 123000,
      kaina: 8500,
    },
    {
      marke: "Toyota",
      modelis: "Corolla",
      metai: 2020,
      rida: 67000,
      kaina: 12900,
    },
    { marke: "BMW", modelis: "320d", metai: 2016, rida: 145000, kaina: 10500 },
    { marke: "Audi", modelis: "A4", metai: 2018, rida: 98000, kaina: 11500 },
    {
      marke: "Skoda",
      modelis: "Octavia",
      metai: 2019,
      rida: 80000,
      kaina: 9900,
    },
  ];
  return (
    <div>
      <h2>Pardavejas</h2>
      {automobiliai.map((automobilis, i) => (
        <Automobilis key={i} info={automobilis} />
      ))}
    </div>
  );
};

export default Pardavejas;
