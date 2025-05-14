import React, { useState } from "react";
import { useRef } from "react";
import Icon from "../assets/Vector.svg";

const PinigaiInfo = (props) => {
  const { valiutos } = props;

  const formRef = useRef();

  let [kovertuota, setKonvertuota] = useState(false);

  const pasirinkta = (event) => {
    event.preventDefault();
    console.log("pasieke");

    const forma = formRef.current;

    const suma = forma["suma"].valueAsNumber;
    const turimaValiuta = Number(forma["turimaValiuta"].value);
    const keiciamaValiuta = Number(forma["keiciamaValiuta"].value);
    console.log(suma);
    props.pasirinkimai([suma, turimaValiuta, keiciamaValiuta]);
    setKonvertuota(true);
  };
  const reset = () => {
    const forma = formRef.current;
    forma.reset();
    setKonvertuota(false);
    props.pasirinkimai([]);
  };

  return (
    <div>
      <img className="icon" src={Icon} alt="icon" />
      <form onSubmit={pasirinkta} ref={formRef}>
        <label htmlFor="suma">Turima suma </label>
        <br />
        <input type="number" name="suma" id="suma" min={1} required />

        <select id="turimaValiuta">
          {valiutos.map((valiuta, i) => (
            <option key={i} value={i}>
              {valiuta.trumpinys}
            </option>
          ))}
        </select>
        <br />
        <small>Įveskite savo turimą pinigų sumą ir pasirinkite valiutą.</small>

        <br />
        <label htmlFor="suma">Norima valiuta </label>
        <br />
        <select id="keiciamaValiuta">
          {valiutos.map((valiuta, i) => (
            <option key={i} value={i}>
              {valiuta.pavadinimas}
            </option>
          ))}
        </select>
        <br />
        <small>Pasirinkite į kokią valiutą norite keisti turimą sumą.</small>
        <br />

        <button
          type="submit"
          className={kovertuota ? "isjungta" : "ijungta"}
          disabled={kovertuota}
        >
          Konvertuoti
        </button>
        {kovertuota === true && (
          <button onClick={reset}>Gryžti į pradžią</button>
        )}
      </form>
    </div>
  );
};

export default PinigaiInfo;
