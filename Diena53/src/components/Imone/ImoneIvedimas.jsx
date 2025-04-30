import React, { useRef } from "react";

const ImoneIvedimas = (props) => {
  const formRef = useRef();

  const pridetiKnyga = (event) => {
    event.preventDefault();

    const forma = formRef.current;

    const vardas = forma["vardas"].value;
    const pavarde = forma["pavarde"].value;
    const pareigos = forma["pareigos"].value;
    const atlyginimas = forma["atlyginimas"].valueAsNumber;

    props.grzintiDarbuotoja({ vardas, pavarde, pareigos, atlyginimas });
    forma.reset();
  };

  return (
    <form onSubmit={pridetiKnyga} ref={formRef}>
      <label htmlFor="vardas">Vardas: </label>
      <input type="text" name="vardas" id="vardas" required />
      <br />
      <label htmlFor="pavarde">Pavarde: </label>
      <input type="text" name="pavarde" id="pavarde" required />
      <br />
      <label htmlFor="pareigos">Pareigos: </label>
      <input type="text" name="pareigos" id="pareigos" required />
      <br />
      <label htmlFor="atlyginimas">Atlyginimas: </label>
      <input type="number" name="atlyginimas" id="atlyginimas" required />
      <br />
      <button type="submit">Prideti</button>
    </form>
  );
};

export default ImoneIvedimas;
