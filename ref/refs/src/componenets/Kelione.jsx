import { useState } from "react";
import { useRef } from "react";

const Kelione = () => {
  const formRef = useRef();
  const [kelioneInfo, setKelioneInfo] = useState([]);

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    setKelioneInfo([
      form["atstumas"].valueAsNumber,
      form["kuroSanaudos"].valueAsNumber,
      form["kuroKaina"].valueAsNumber,
    ]);
    form.reset();
  };

  const kuroSunaudota = () => {
    return ((kelioneInfo[0] / 100) * kelioneInfo[1]).toFixed(2);
  };
  const kuroKaina = () => {
    return (kuroSunaudota() * kelioneInfo[2]).toFixed(2);
  };

  return (
    <div>
      <h2>Kelione</h2>
      <form onSubmit={submitFn} ref={formRef}>
        <label htmlFor="atstumas">Kiek reikes nuvaziuoti Km</label>
        <input type="number" min="1" name="atstumas" required />
        <br />
        <label htmlFor="kuroSanaudos">Kuro sanaudos 100-ui km</label>
        <input
          type="number"
          min="0.1"
          name="kuroSanaudos"
          required
          step="0.1"
        />
        <br />
        <label htmlFor="kuroKaina">Kuro kaina </label>
        <input type="number" name="kuroKaina" min="0.01" required step="0.01" />
        <br />
        <button>Ivesti</button>
      </form>
      {kelioneInfo.length > 0 && (
        <>
          <p>Atstumas: {kelioneInfo[0]} Km</p>
          <p>Kuro sanaudos 100-ui km: {kelioneInfo[1]} l</p>
          <p>Kuro kaina: {kelioneInfo[2]} Eur/l</p>
          <br />
          <p>Sunaudota kuro kelionei bus: {kuroSunaudota()} l</p>
          <p>Kuras turetu kainuoti: {kuroKaina()} Eur</p>
        </>
      )}
    </div>
  );
};

export default Kelione;
