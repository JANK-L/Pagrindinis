import { useState } from "react";
import { useRef } from "react";

const Komp4 = () => {
  const formRef = useRef();
  const [automobiliai, setAutomobiliai] = useState([]);

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    const naujasAutomobilis = {
      marke: form["marke"].value,
      modelis: form["modelis"].value,
      metai: form["metai"].value,
    };

    const kiekNetusciuLauku = Object.values(naujasAutomobilis).filter(
      (reiksme) => reiksme.length > 0
    ).length;

    if (kiekNetusciuLauku == Object.values(naujasAutomobilis).length)
      setAutomobiliai([...automobiliai, naujasAutomobilis]);
    form.reset();
  };

  const naujausiasAutomobilis = () => {
    let naujausiasAuto = automobiliai[0];

    for (const auto of automobiliai) {
      if (auto.metai > naujausiasAuto.metai) naujausiasAuto = auto;
    }

    return naujausiasAuto;
  };

  return (
    <div>
      <h2>Automobiliai</h2>

      <form onSubmit={submitFn} ref={formRef}>
        <div>
          <label htmlFor="marke">Marke</label>
          <br />
          <input type="text" name="marke" />
        </div>
        <div>
          <label htmlFor="modelis">Modelis</label>
          <br />
          <input type="text" name="modelis" />
        </div>
        <div>
          <label htmlFor="metai">Metai</label>
          <br />
          <input
            type="number"
            name="metai"
            min="1900"
            max="2025"
            defaultValue="2000"
            step="1"
          />
        </div>
        <button type="submit">ivesti</button>
      </form>
      <br />

      <table border="1" cellPadding={10} cellSpacing={5}>
        <thead>
          <tr>
            <th>Marke</th>
            <th>Modelis</th>
            <th>Metai</th>
          </tr>
        </thead>

        <tbody>
          {automobiliai.map((automobilis, indeksas) => {
            return (
              <tr key={indeksas}>
                <td>{automobilis.marke}</td>
                <td>{automobilis.modelis}</td>
                <td>{automobilis.metai}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Naujausias automobilis</h2>
      {automobiliai.length > 0 && (
        <p>
          {naujausiasAutomobilis().marke} {naujausiasAutomobilis().metai}
        </p>
      )}
      <button onClick={() => setAutomobiliai([])}>Isvalyti</button>
    </div>
  );
};

export default Komp4;
