import { useState } from "react";
import { useRef } from "react";

const Komp3 = () => {
  const [pazymiai, setPazymiai] = useState([]);
  const inputRef = useRef();

  const submitFn = (event) => {
    event.preventDefault();
    const pazymys = inputRef.current.valueAsNumber;

    if (pazymys > 0) {
      setPazymiai([...pazymiai, pazymys]);
      inputRef.current.value = "";
    }
  };

  const vidurkis = () => {
    const vidurkis =
      pazymiai.reduce((a, pazymys) => a + pazymys, 0) / pazymiai.length;
    return vidurkis.toFixed(2);
  };

  const isvalyti = () => {
    setPazymiai([]);
  };

  return (
    <div>
      <h2>Studento vidurkis</h2>
      <form onSubmit={submitFn}>
        <label>Iveskite pazymi:</label>
        <br />
        <input ref={inputRef} type="number" min="1" max="10" name="pazymys" />
        <br />
        <button>Ivesti</button>
      </form>
      {pazymiai.length > 0 && (
        <>
          <div>
            <h2>Ivesti pazymiai</h2>
            <p>{pazymiai.join(", ")}</p>
          </div>
          <div>
            <h2>Ivestu pazymiu vidurkis</h2>
            <p>{vidurkis()}</p>
          </div>
          <div>
            <h2>Isvalyti</h2>
            <button onClick={isvalyti}>Isvalyti</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Komp3;
