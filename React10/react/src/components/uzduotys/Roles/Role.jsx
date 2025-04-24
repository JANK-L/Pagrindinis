import React from "react";

const Role = ({ info }) => {
  return (
    <div>
      <h3>Role: {info.pavadinimas}</h3>
      <p>Vartotoju kiekis su role: {info.kiekis}</p>
      <p>
        {info.kiekis > 20
          ? "Daug yra tokiu vartotoju"
          : "Mazai yra tokiu vartotoju"}
      </p>
    </div>
  );
};

export default Role;
