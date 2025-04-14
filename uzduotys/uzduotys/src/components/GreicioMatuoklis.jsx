import { useState } from "react";

const GreicioMatuoklis = () => {
  const [greitis, setGreitis] = useState(0);

  const naujasGreitis = (skaicius) => {
    setGreitis(skaicius);
  };

  const tikrintiGreiti = () => {
    switch (greitis) {
      case 0:
        return "Stovi vietoje.";
        break;
      case 10:
        return "Rieda.";
        break;
      case 50:
        return "Vaziuoja vidutiniu greiciu.";
        break;
      case 90:
        return "Vaziuoja greitai.";
        break;
      case 130:
        return "Vaziuoja automagistrale.";
        break;
      case 300:
        return "Vaziuoja Vokietijoje.";
    }
  };

  return (
    <div>
      <h2>GreicioMatuoklis</h2>
      <p>Greitis: {greitis} km/h</p>
      {[0, 10, 50, 90, 130, 300].map((skaicius) => {
        return (
          <button key={skaicius} onClick={() => naujasGreitis(skaicius)}>
            {skaicius} km/h
          </button>
        );
      })}
      <p>{tikrintiGreiti()}</p>
    </div>
  );
};

export default GreicioMatuoklis;
