import React from "react";
import Salis from "./Salis";

const Pasaulis = () => {
  let salis = "Australija";
  let zemynas = "Australija";
  return (
    <div>
      <h2>Pasaulis</h2>
      <Salis pavadinimas="Lietuva" zemynas="Europa" />
      <Salis pavadinimas={salis} zemynas={zemynas} />
    </div>
  );
};

export default Pasaulis;
