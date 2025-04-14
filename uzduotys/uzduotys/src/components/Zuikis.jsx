import { useState } from "react";

const Zuikis = () => {
  const [arPersoko, setPersoko] = useState(false);

  const suolisRandom = () => {
    let suolis = Math.floor(Math.random() * 2);
    setPersoko(suolis ? true : false);
  };

  return (
    <div>
      <h2>Zuikis</h2>
      <p>Ar zuikis peršoko griovį - {arPersoko ? "Taip" : "Ne"}</p>
      <button onClick={suolisRandom}>Suolis</button>
      <button onClick={() => setPersoko(true)}>Persoko</button>
    </div>
  );
};

export default Zuikis;
