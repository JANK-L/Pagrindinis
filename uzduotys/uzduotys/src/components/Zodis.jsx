import { useState } from "react";

const Zodis = () => {
  const [zodis, setZodis] = useState("");

  return (
    <div>
      <h2>Zodis</h2>
      <p>Zodis: {zodis}</p>
      <button onClick={() => setZodis("Pomidoras")}>Pomidoras</button>
      <button onClick={() => setZodis("Agurkas")}>Agurkas</button>
    </div>
  );
};

export default Zodis;
