import { useState } from "react";

const Begikai = () => {
  const [laikas1, setLaikas1] = useState(0);
  const [laikas2, setLaikas2] = useState(0);

  const atnaujintiLaika = (event, setLaikas) => {
    console.log(parseFloat(event.target.value));
    setLaikas(parseFloat(event.target.value));
  };

  const greitesnis = () => {
    if (laikas1 < laikas2)
      return <p>Pirmas begikas buvo greitesnis {laikas2 - laikas1} s.</p>;
    else if (laikas1 > laikas2)
      return <p>Antras begikas buvo greitesnis {laikas1 - laikas2} s.</p>;
    else if (laikas1 === laikas2) return <p>Abu atbego tuo paciu metu.</p>;
  };

  return (
    <div>
      <h2>Begikai</h2>
      <label htmlFor="begikas1Laikas">Pirmo begiko laikas: </label>
      <input
        onInput={(event) => atnaujintiLaika(event, setLaikas1)}
        type="number"
        id="begikas1Laikas"
      />
      <br />
      <label htmlFor="begikas2Laikas">Antro begiko laikas: </label>
      <input
        onInput={(event) => atnaujintiLaika(event, setLaikas2)}
        type="number"
        id="begikas2Laikas"
      />
      {greitesnis()}
    </div>
  );
};

export default Begikai;
