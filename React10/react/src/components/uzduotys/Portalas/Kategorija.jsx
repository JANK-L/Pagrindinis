import React from "react";
import Naujiena from "./Naujiena";

const Kategorija = () => {
  let naujienos = [
    {
      pavadinimas: "Ateina karscio banga!",
      perziuru_kiekis: 352,
      istrauka:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt esse, aliquid fugiat cupiditate quam excepturi numquam magnam deleniti unde, nostrum cumque modi. Accusamus adipisci reiciendis, vitae amet quo sed...",
    },
    {
      pavadinimas: "Numire seniausias pasaulio zmogus.",
      perziuru_kiekis: 207,
      istrauka:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt esse, aliquid fugiat cupiditate quam excepturi numquam magnam deleniti unde, nostrum cumque modi. Accusamus adipisci reiciendis, vitae amet quo sed...",
    },
    {
      pavadinimas: "5 budai tapti turtingu. ",
      perziuru_kiekis: 1554,
      istrauka:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt esse, aliquid fugiat cupiditate quam excepturi numquam magnam deleniti unde, nostrum cumque modi. Accusamus adipisci reiciendis, vitae amet quo sed...",
    },
  ];
  return (
    <div>
      <h2>Kategorija </h2>
      {naujienos.map((naujiena, i) => (
        <Naujiena key={i} info={naujiena} />
      ))}
    </div>
  );
};

export default Kategorija;
