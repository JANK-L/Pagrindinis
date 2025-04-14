import { useState } from "react";

const VardoIvedimas = () => {
  let [vardas, setVardas] = useState("");

  const gautiVarda = (event) => {
    const vardas = event.target.value;
    setVardas(vardas);
  };

  return (
    <div>
      <h2>VardoIvedimas</h2>
      <input type="text" id="vardas" value={vardas} onInput={gautiVarda} />
      <p>Sveiki, {vardas}</p>
      <button onClick={() => setVardas("")}>Istrinti</button>
    </div>
  );
};

export default VardoIvedimas;
