import React, { useRef, useState } from "react";

const Temperaturos = () => {
  const formRef = useRef();
  const [temperaturos, setTemperaturos] = useState([]);

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    setTemperaturos([...temperaturos, form["temperatura"].valueAsNumber]);
    form.reset();
  };

  const vidTemp = () => {
    let kiekis = temperaturos.length;
    let suma = temperaturos.reduce((a, b) => a + b, 0);
    return suma / kiekis + "℃";
  };

  return (
    <div>
      <h2>Temperaturos</h2>
      <form onSubmit={submitFn} ref={formRef}>
        <label htmlFor="temperatura">Temperatura: </label>
        <input type="number" name="temperatura" required />
        <br />
        <button>Ivesti</button>
      </form>

      <p>Ivestu temperaturu kiekis: {temperaturos.length}</p>

      {temperaturos.length > 0 && (
        <p> Temperaturos: {temperaturos.map((t) => `${t}℃`).join(`, `)} </p>
      )}
      {temperaturos.length > 0 && <p> Vidutine temperatura: {vidTemp()} </p>}
      {temperaturos.length > 0 && (
        <p> Maziausia temperatura: {Math.min(...temperaturos)}&deg;C</p>
      )}
      {temperaturos.length > 0 && (
        <p> Didziausia temperatura: {Math.max(...temperaturos)}&deg;C</p>
      )}

      {temperaturos.length > 0 && (
        <p>
          {" "}
          Skirtumas tarp didziausios ir maziausios temperaturos:{" "}
          {Math.max(...temperaturos) - Math.min(...temperaturos)}&deg;C
        </p>
      )}
      {temperaturos.length > 0 && (
        <button onClick={() => setTemperaturos([])}>Isvalyti duomenis</button>
      )}
    </div>
  );
};

export default Temperaturos;
