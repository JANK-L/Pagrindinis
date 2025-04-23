import { useState } from "react";
import { useRef } from "react";

const MedzioApdirbejas = () => {
  const formRef = useRef();
  const [darboInfo, setDarboInfo] = useState([]);

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    setDarboInfo([
      form["medziagosKaina"].valueAsNumber,
      form["valanduDirbta"].valueAsNumber,
      form["valandosUzdarbis"].valueAsNumber,
    ]);
    form.reset();
  };

  const islaidos = () => {
    return darboInfo[1] * darboInfo[2] - darboInfo[0];
  };

  return (
    <div>
      <h2>MedzioApdirbejas</h2>

      <form onSubmit={submitFn} ref={formRef}>
        <label htmlFor="medziagosKaina">
          Kiek kainavo visos medziagos Eur:{" "}
        </label>
        <input type="number" min="1" name="medziagosKaina" required />
        <br />
        <label htmlFor="valanduDirbta">Kiek valandu dirbta: </label>
        <input
          type="number"
          min="0.1"
          name="valanduDirbta"
          required
          step="0.1"
        />
        <br />
        <label htmlFor="valandosUzdarbis">Valandinis uzdarbis Eur: </label>
        <input
          type="number"
          name="valandosUzdarbis"
          min="0.1"
          required
          step="0.1"
        />
        <br />
        <button>Ivesti</button>
      </form>
      {darboInfo.length > 0 && (
        <>
          <p>Visu medziagu kaina: {darboInfo[0]} Eur</p>
          <p>Dirbta valandu: {darboInfo[1]} h</p>
          <p>Valandinis uzdarbis: {darboInfo[2]} Eur/h</p>
          <br />
          <p>Islaidos: {islaidos()}</p>
        </>
      )}
    </div>
  );
};

export default MedzioApdirbejas;
