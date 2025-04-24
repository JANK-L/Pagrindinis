import React from "react";

const Salis = ({ pavadinimas, zemynas }) => {
  const arEuropa = (zemynas) => {
    if (zemynas === "Europa") return "Jega";
  };

  return (
    <div>
      <h3>{pavadinimas}</h3>
      <p>Priklauso zemynui {zemynas}</p>
      {arEuropa(zemynas)}
    </div>
  );
};

export default Salis;
