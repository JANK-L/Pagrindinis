import React from "react";
import Knyga from "./Knyga";

const KnyguSarasas = () => {
  let knygos = [
    { pavadinimas: "1984", autorius: "George Orwell", puslapiai: 299 },
    {
      pavadinimas: "The Lord of the Rings",
      autorius: "J.R.R. Tolkien",
      puslapiai: 1178,
    },
    { pavadinimas: "The Shining", autorius: "Stephen King", puslapiai: 447 },
  ];
  return (
    <div>
      <h2>KnyguSarasas</h2>

      {knygos.map((knyga, i) => (
        <Knyga
          key={i}
          knyga={knyga}
          ilgaKnyga={knyga.puslapiai > 300 ? true : false}
        />
      ))}
    </div>
  );
};

export default KnyguSarasas;
