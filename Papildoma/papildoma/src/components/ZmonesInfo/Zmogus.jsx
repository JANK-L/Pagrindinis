import React from "react";

const Zmogus = ({ zmogus, rodytiAmziu }) => {
  return (
    <div>
      <h3>{zmogus.vardas}</h3>
      {zmogus.vardas === "Aiste" && <p>Studente</p>}
      {rodytiAmziu === true && <p>Amzius: {zmogus.amzius} m.</p>}
    </div>
  );
};

export default Zmogus;
