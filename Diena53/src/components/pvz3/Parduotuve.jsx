import React, { useState } from "react";
import PridetiPreke from "./PridetiPreke";
import PrekiuSarasas from "./PrekiuSarasas";

const Parduotuve = () => {
  const testData = [
    { pavadinimas: "Knyga", kiekis: 4, kaina: 9 },
    { pavadinimas: "Zurnalas", kiekis: 7, kaina: 6 },
    { pavadinimas: "Lego", kiekis: 3, kaina: 20 },
  ];

  const [prekes, setPrekes] = useState(testData);

  const gaudomPreke = (preke) => {
    setPrekes([preke, ...prekes]);
  };

  const gaudomNupirko = (preke) => {
    const indexas = prekes.findIndex((pr) => pr === preke);
    if (indexas !== -1 && preke.kiekis > 0) {
      preke.kiekis--;

      prekes[indexas] = preke;
      setPrekes([...prekes]);
    }
  };

  return (
    <div>
      <h2>Parduotuve</h2>
      <PridetiPreke siunciamPreke={gaudomPreke} />
      <PrekiuSarasas data={prekes} nupirko={gaudomNupirko} />
    </div>
  );
};

export default Parduotuve;
