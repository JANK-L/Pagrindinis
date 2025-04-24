import React from "react";

const Salis = ({ pavadinimas, zemynas }) => {
  return (
    <div>
      <h3>{pavadinimas}</h3>
      <p>Priklauso zemynui {zemynas}</p>
    </div>
  );
};

export default Salis;
