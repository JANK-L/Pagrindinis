import React from "react";
import Role from "./Role";

const VisosRoles = () => {
  let roles = [
    { pavadinimas: "Administratorius", kiekis: 3 },
    { pavadinimas: "Moderatorius", kiekis: 7 },
    { pavadinimas: "Svecias", kiekis: 343 },
    { pavadinimas: "Prenumeratorius", kiekis: 93 },
  ];
  return (
    <div>
      <h2>VisosRoles</h2>
      {roles.map((role, i) => (
        <Role key={i} info={role} />
      ))}
    </div>
  );
};

export default VisosRoles;
