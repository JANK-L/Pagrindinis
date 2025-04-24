import React from "react";
import Pazymys from "./Pazymys";

const Studentas = () => {
  let studentas = {
    vardas: "Vardenis",
    pavarde: "Pavardenis",
    mokykla: "Kranto vidurine",
    mokymo_programa: "Automobiliu mechanika",
  };
  let pazymiai = [10, 7, 4, 8, 9, 3, 5, 10, 10];
  return (
    <div>
      <h2>Studentas</h2>
      <h3>
        {studentas.vardas} {studentas.pavarde}
      </h3>
      <p>Mokykla: {studentas.mokykla}</p>
      <p>Mokymo programa: {studentas.mokymo_programa}</p>
      {pazymiai.map((pazymys, i) => (
        <Pazymys key={i} pazymys={pazymys} />
      ))}
    </div>
  );
};

export default Studentas;
