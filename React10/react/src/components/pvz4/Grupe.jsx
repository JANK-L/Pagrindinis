import React from "react";
import Studentas from "./Studentas";

const Grupe = () => {
  let mokinys = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 25,
  };

  return (
    <div>
      <h2>Grupe</h2>
      <Studentas studentas={mokinys} />
    </div>
  );
};

export default Grupe;
