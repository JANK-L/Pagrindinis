import { useRef } from "react";
import { useState } from "react";

const Skaicius = () => {
  const inputRef = useRef();

  const [skaicius, setSkaicius] = useState("");

  const arTeigiamas = () => {
    if (skaicius > 0) return "Teigiamas";
    else if (skaicius < 0) return "Neigiamas";
    else return "Nulis";
  };

  const arLyginis = () => {
    if (skaicius % 2 === 0) return "Lyginis";
    else return "Nelyginis";
  };

  return (
    <div>
      <h2>Skaicius</h2>
      <input type="number" ref={inputRef} />
      <button
        onClick={() =>
          setSkaicius(
            inputRef.current.valueAsNumber,
            (inputRef.current.value = "")
          )
        }
      >
        ivesti
      </button>
      {skaicius !== "" && (
        <>
          <p>{skaicius}</p>
          <p>Skaicius yra {arTeigiamas()}</p>
          <p>Skaicius yra {arLyginis()}</p>
        </>
      )}
    </div>
  );
};

export default Skaicius;
