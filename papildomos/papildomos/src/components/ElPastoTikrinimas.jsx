import { useState, useRef } from "react";

const ElPastoTikrinimas = () => {
  const [elPastas, setElPAStas] = useState("");
  const inputRef = useRef(null);

  const isejo = () => {
    let pastas = inputRef.current.value.split("@");

    if (pastas.length === 2 && pastas[0].length > 0 && pastas[1].length > 0) {
      setElPAStas(true);
    } else {
      setElPAStas(false);
    }
  };

  const arGeras = () => {
    if (elPastas === "") return;
    if (elPastas === true) {
      document.getElementById("elpasto_teisingumas").style.color = "white";
      return "el. pastas atrodo gerai";
    } else if (elPastas === false) {
      document.getElementById("elpasto_teisingumas").style.color = "red";
      return "el. pastas neteisingas";
    }
  };
  return (
    <div>
      <h2>ElPastoTikrinimas</h2>
      <input ref={inputRef} type="text" onBlur={isejo} />
      <p id="elpasto_teisingumas">{arGeras()}</p>
    </div>
  );
};

export default ElPastoTikrinimas;
