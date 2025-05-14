import React, { useState } from "react";
import PinigaiInfo from "./PinigaiInfo";
import "./pinigai.css";

const PinigaiMain = () => {
  const valiutos = [
    {
      trumpinys: "EUR",
      pavadinimas: "Eurai",
      santykis: [1, 1.13, 0.85, 4.26, 93.8],
    },
    {
      trumpinys: "USD",
      pavadinimas: "Doleriai",
      santykis: [0.88, 1, 0.75, 3.76, 82.6],
    },
    {
      trumpinys: "GBP",
      pavadinimas: "Svarai",
      santykis: [1.17, 1.33, 1, 5, 110],
    },
    {
      trumpinys: "PLN",
      pavadinimas: "Zlotai",
      santykis: [0.23, 0.27, 0.2, 1, 22],
    },
    {
      trumpinys: "RUB",
      pavadinimas: "Rubliai",
      santykis: [0.011, 0.012, 0.009, 0.045, 1],
    },
  ];

  const [pasirinkta, setPasirinkta] = useState([]);

  const konvertuoti = (pasirinkimai) => {
    if (pasirinkimai.length > 0)
      setPasirinkta([
        pasirinkimai[0],
        valiutos[pasirinkimai[1]].santykis[pasirinkimai[2]],
        valiutos[pasirinkimai[1]].trumpinys,
        valiutos[pasirinkimai[2]].trumpinys,
      ]);
    else setPasirinkta([]);
  };

  return (
    <div className="main">
      <img src="./src/assets/kiaule.png" alt="photo" />
      <div>
        <PinigaiInfo valiutos={valiutos} pasirinkimai={konvertuoti} />
        {pasirinkta.length > 0 && (
          <>
            <p>
              {pasirinkta[0]} {pasirinkta[2]} yra{" "}
              {pasirinkta[1] * pasirinkta[0]} {pasirinkta[3]}
            </p>
            <small>
              <strong>Santykis</strong>: 1 {pasirinkta[2]} = {pasirinkta[1]}{" "}
              {pasirinkta[3]}
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default PinigaiMain;
