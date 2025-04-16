import { useState } from "react";

const TekstoLaukas = () => {
  const [kiekis, setKiekis] = useState(0);
  const skaiciuotiSimbolius = () => {};

  return (
    <div>
      <h2>TekstoLaukas</h2>
      <textarea onInput={(e) => skaiciuotiSimbolius(e)}></textarea>
      <p>{kiekis}</p>
    </div>
  );
};

export default TekstoLaukas;
