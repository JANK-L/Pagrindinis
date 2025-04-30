import React, { useRef } from "react";

const KnygosIvedimas = (props) => {
  const formRef = useRef();

  const pridetiKnyga = (event) => {
    event.preventDefault();

    const forma = formRef.current;

    const pavadinimas = forma["pavadinimas"].value;
    const kaina = forma["kaina"].valueAsNumber;
    const metai = forma["metai"].valueAsNumber;

    props.grzintiKnyga({ pavadinimas, kaina, metai });
    forma.reset();
  };

  return (
    <form onSubmit={pridetiKnyga} ref={formRef}>
      <label htmlFor="pavadinimas">Pavadinimas: </label>
      <input type="text" name="pavadinimas" id="pavadinimas" required />
      <br />
      <label htmlFor="kaina">Kaina: </label>
      <input type="number" name="kaina" id="kaina" required />
      <br />
      <label htmlFor="metai">Metai: </label>
      <input type="number" name="metai" id="metai" required />
      <br />
      <button type="submit">Prideti</button>
    </form>
  );
};

export default KnygosIvedimas;
