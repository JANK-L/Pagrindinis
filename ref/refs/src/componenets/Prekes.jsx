import React, { useRef, useState } from "react";

const Prekes = () => {
  const formRef = useRef();
  const [prekes, setPrekes] = useState([]);

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    setPrekes([
      {
        pavadinimas: form["pavadinimas"].value,
        kaina: form["kaina"].valueAsNumber,
        kiekis: form["kiekis"].valueAsNumber,
      },
      ...prekes,
    ]);

    form.reset();
  };

  const rodytiPrekes = (prekes) => {
    return prekes.map((preke, i) => (
      <div key={i}>
        <h3>{preke.pavadinimas}</h3>
        <p>Kaina: {preke.kaina} &euro;</p>
        <small>Kiekis: {preke.kiekis} vnt.</small>
      </div>
    ));
  };

  return (
    <div>
      <h2>Prekes</h2>

      <form onSubmit={submitFn} ref={formRef}>
        <label htmlFor="pavadinimas">Pavadinimas: </label>
        <input type="text" name="pavadinimas" required />
        <br />
        <label htmlFor="kaina">Kaina: </label>
        <input type="number" name="kaina" required />
        <br />
        <label htmlFor="kiekis">Kiekis: </label>
        <input type="number" name="kiekis" required />
        <br />
        <button>Ivesti</button>
      </form>

      <div>
        {prekes.length > 0
          ? rodytiPrekes(prekes)
          : "Kol kas nera ivestu prekiu"}
      </div>

      {prekes.filter((preke) => preke.kiekis < 5).length > 0 && (
        <div>
          <br />
          Prekes kuriu liko maziau nei 5 vnt.:
          {rodytiPrekes(prekes.filter((preke) => preke.kiekis < 5))}
        </div>
      )}

      {prekes.length > 0 && (
        <button onClick={() => setPrekes([])}>Isvalyti duomenis</button>
      )}
    </div>
  );
};

export default Prekes;
