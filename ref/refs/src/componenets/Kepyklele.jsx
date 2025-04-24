import React, { useRef, useState } from "react";

const Kepyklele = () => {
  const formRef = useRef();
  const formRef2 = useRef();
  const [kepyklele, setKepyklele] = useState();
  const [uzsakymai, setUzsakymai] = useState([]);

  const submitFn = (event) => {
    event.preventDefault();
    const form = formRef.current;

    setKepyklele({
      darbuotojai: form["darbuotojai"].valueAsNumber,
      kepiniaiPerValanda: form["kepiniaiPerValanda"].valueAsNumber,
      darboVal: form["darboVal"].valueAsNumber,
    });
  };

  const submitUzsakymai = (event) => {
    event.preventDefault();
    const form = formRef2.current;

    setUzsakymai([...uzsakymai, form["uzsakymas"].valueAsNumber]);
    form.reset();
  };

  const arSpes = () => {
    return uzsakymai.reduce((a, b) => a + b, 0) <=
      kepyklele.darbuotojai * kepyklele.darboVal * kepyklele.kepiniaiPerValanda
      ? "Spes iskepti"
      : "Nespes iskepti";
  };

  console.log(kepyklele);
  console.log(uzsakymai);
  return (
    <div>
      <h2>Kepyklele</h2>

      <form onChange={submitFn} ref={formRef}>
        <label htmlFor="darbuotojai">Darbuotoju skaicius: </label>
        <input type="number" min="0" name="darbuotojai" required />
        <br />

        <label htmlFor="kepiniaiPerValanda">
          Vieno darbuotojo pdaromi kepiniai per valanda:{" "}
        </label>
        <input type="number" min="0" name="kepiniaiPerValanda" required />
        <br />

        <label htmlFor="darboVal">Darbo valandos: </label>
        <input type="number" min="0" name="darboVal" required />
        <br />
      </form>
      <br />
      <form onSubmit={submitUzsakymai} ref={formRef2}>
        <label htmlFor="uzsakymas">Uzsakymas: </label>
        <input type="number" min="0" name="uzsakymas" required />
        <br />
        <button>Ivesti</button>
        <br />
      </form>

      <br />

      {uzsakymai.length > 0 && (
        <p>Bendra uzsakymu suma: {uzsakymai.reduce((a, b) => a + b, 0)} vnt.</p>
      )}

      {uzsakymai.length > 0 &&
        typeof kepyklele.darbuotojai === "number" &&
        typeof kepyklele.kepiniaiPerValanda === "number" &&
        typeof kepyklele.darboVal === "number" &&
        arSpes()}
    </div>
  );
};

export default Kepyklele;
