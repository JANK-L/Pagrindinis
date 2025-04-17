import { useState } from "react";

const Vistos = () => {
  const [kiausiniai, setKiausiniai] = useState(0);

  const dienosUzsakymai = 3;

  const arUztenka = () => {
    if (kiausiniai >= dienosUzsakymai)
      return (
        <p>Viskas gerai, liks kiausiniu: {dienosUzsakymai - kiausiniai}</p>
      );
    else
      return (
        <p>
          Nespeja vista deti kiausiniu, truks: {kiausiniai - dienosUzsakymai}
        </p>
      );
  };

  return (
    <div>
      <h2>Vistos</h2>
      <label htmlFor="kiausiniai">Bendrai kiausiniai per diena: </label>
      <input
        type="number"
        id="kiausiniai"
        onInput={(event) => setKiausiniai(parseInt(event.target.value))}
      />
      <br />
      {arUztenka()}
    </div>
  );
};

export default Vistos;
