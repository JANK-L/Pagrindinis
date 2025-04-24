import React from "react";
import Modulis from "./Modulis";

const Mokymai = () => {
  let moduliai = [
    { pavadinimas: "html", trukme: 20 },
    { pavadinimas: "css", trukme: 40 },
    { pavadinimas: "javascript", trukme: 70 },
    { pavadinimas: "react", trukme: 50 },
  ];
  return (
    <div>
      <h2>Mokymai</h2>
      {moduliai.map((modulis, i) => (
        <Modulis key={i} info={modulis} />
      ))}
    </div>
  );
};

export default Mokymai;
